import {ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import strings from '@core/strings';
import {AuthenticationService, ExchangeInfoDataService, SettingsService} from "@app/_services";
import {User} from "@app/_models";
import {first} from "rxjs/operators";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatTableDataSource, Sort} from "@angular/material";
import {AdminUsersDataService} from "@app/_services/admin-users-data.service";

let self;

@Component({
  selector: 'home-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  strings = strings;
  arrow = {
    show: false,
    type: '',
    message: '',
  };
  loading = false;

  columns: string[] = ['no_', 'firstName', 'lastName', 'email', 'username', 'role', 'status', 'edit', 'delete'];
  rows: User[] = [];
  sortedRows: User[] = [];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private service: AdminUsersDataService,
                     public dialog: MatDialog,
                     private route: ActivatedRoute,
                     private changeDetectorRefs: ChangeDetectorRef,) {
    titleService.setTitle(`${strings.userManagement}-${strings.adminPanel}`);
    self = this;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.rows);
    this.loadData();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sort: Sort) {
    const data = self.rows.slice();
    if (!sort.active || sort.direction === '') {
      this.rows = data;
      return;
    }

    self.sortedRows = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'number': return compare(a.number, b.number, isAsc);
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'username': return compare(a.username, b.username, isAsc);
        case 'role': return compare(a.role, b.role, isAsc);
        default: return 0;
      }
    });
    self.dataSource.data = self.sortedRows;
    self.changeDetectorRefs.detectChanges();
  }

  loadData() {
    self.loading = true;

    self.service.list()
      .pipe(first())
      .subscribe(res => {
        self.loading = false;
        self.arrow.show = false;

        if (res.result == 'success') {
          const data = res.data;
          if (data.length === 0) {
            self.arrow = {
              show: true,
              type: 'warning',
              message: strings.noData,
            };
          } else {
            self.rows = [];
            for (let item of data) {
              self.rows.push(item);
            }
          }
          // self.dataSource.paginator = self.paginator;
          self.dataSource.data = self.rows;
          self.changeDetectorRefs.detectChanges();
        } else {
          self.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }
      }, error => {
        self.loading = false;
        self.error = error;
        self.arrow = {
          show: true,
          type: 'danger',
          message: strings.unkbownServerError,
        };
      });
  }

  onAddButtonClicked() {
    const dialogRef = this.dialog.open(AdminUsersEditDialog, {
      width: '320px',
      // panelClass: 'col-lg-4 col-md-6',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === strings.yes) {
        self.service.list()
          .pipe(first())
          .subscribe(res => {
            self.arrow.show = false;

            if (res.result == 'success') {
              self.rows = [];
              for (let item of res.data) {
                self.rows.push(item);
              }
              self.dataSource.data = self.rows;
              self.changeDetectorRefs.detectChanges();
            } else {
              self.arrow = {
                show: true,
                type: 'danger',
                message: res.message,
              };
            }
          }, error => {
            self.error = error;
            self.arrow = {
              show: true,
              type: 'danger',
              message: strings.unkbownServerError,
            };
          });
      }
    });
  }

  onEditButtonClicked(user: User) {
    const dialogRef = this.dialog.open(AdminUsersEditDialog, {
      width: '320px',
      // panelClass: 'col-lg-4 col-md-6',
      data: user,
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === strings.yes) {
        self.service.list()
          .pipe(first())
          .subscribe(res => {
            self.arrow.show = false;

            if (res.result == 'success') {
              self.rows = [];
              for (let item of res.data) {
                self.rows.push(item);
              }
              self.dataSource.data = self.rows;
              self.changeDetectorRefs.detectChanges();
            } else {
              self.arrow = {
                show: true,
                type: 'danger',
                message: res.message,
              };
            }
          }, error => {
            self.error = error;
            self.arrow = {
              show: true,
              type: 'danger',
              message: strings.unkbownServerError,
            };
          });
      }
    });
  }

  onDeleteButtonClicked(user: User) {
    const dialogRef = this.dialog.open(AdminUsersDeleteDialog, {
      // width: '250px',
      // panelClass: 'col-lg-4 col-md-6',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === strings.yes) {
        self.service.remove({
          id: user.id,
        })
          .pipe(first())
          .subscribe(res => {
            self.arrow.show = false;

            if (res.result == 'success') {
              self.arrow = {
                show: true,
                type: 'success',
                message: res.message,
              };
              self.rows = [];
              for (let item of res.data) {
                self.rows.push(item);
              }
              self.dataSource.data = self.rows;
              self.changeDetectorRefs.detectChanges();
            } else {
              self.arrow = {
                show: true,
                type: 'danger',
                message: res.message,
              };
            }
          }, error => {
            self.error = error;
            self.arrow = {
              show: true,
              type: 'danger',
              message: strings.unkbownServerError,
            };
          });
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


@Component({
  selector: 'admin-users-delete-dialog',
  templateUrl: './admin-users.component-delete.dialog.html',
})
export class AdminUsersDeleteDialog {
  strings = strings;
  constructor(
    public dialogRef: MatDialogRef<AdminUsersDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}
}

@Component({
  selector: 'admin-users-edit-dialog',
  templateUrl: './admin-users.component-edit.dialog.html',
})
export class AdminUsersEditDialog implements OnInit{
  strings = strings;
  arrow = {
    show: false,
    type: '',
    message: '',
  };
  form: FormGroup;
  roles = [
    {label: 'User', value: 'user'},
    {label: 'Admin', value: 'admin'},
  ];
  loading = false;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<AdminUsersDeleteDialog>,
    private formBuilder: FormBuilder,
    private service: AdminUsersDataService,
    @Inject(MAT_DIALOG_DATA) public data: User,) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
    });
    this.f.id.setValue(this.data.id);
    this.f.firstName.setValue(this.data.firstName);
    this.f.lastName.setValue(this.data.lastName);
    this.f.email.setValue(this.data.email);
    this.f.username.setValue(this.data.username);
    this.f.password.setValue(this.data.id);
    this.f.type.setValue(this.data.type);
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.arrow.show = false;

    if (this.form.invalid) {
      return;
    }

    const id = this.f.id.value;
    const firstName = this.f.firstName.value;
    const lastName = this.f.lastName.value;
    const email = this.f.email.value;
    const username = this.f.username.value;
    const password = this.f.password.value;
    const type = this.f.type.value;

    if (this.data.id > 0) {
      this.service.edit({
        id,
        firstName,
        lastName,
        email,
        username,
        type,
      })
        .pipe(first())
        .subscribe(res => {
          if (res.result === 'success') {
            this.dialogRef.close(strings.yes);
            return;
          }
          this.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }, error => {
          this.arrow = {
            show: true,
            type: 'danger',
            message: strings.unkbownServerError,
          };
        });
    } else {
      this.service.add({
        firstName,
        lastName,
        email,
        username,
        password,
        type,
      })
        .pipe(first())
        .subscribe(res => {
          if (res.result === 'success') {
            this.dialogRef.close(strings.yes);
            return;
          }
          this.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }, error => {
          this.arrow = {
            show: true,
            type: 'danger',
            message: strings.unkbownServerError,
          };
        });
    }
  }
}
