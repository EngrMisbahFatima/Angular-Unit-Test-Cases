import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('app title testing', () => {
    expect(component.title).toBe("Users")
  });

  it('get username function testing', () => {
    expect(component.userName()).toBe("Flora")
  });

  it('find element by classname testing', () => {
    const ele = fixture.nativeElement;
    expect(ele.querySelector('.subTitle').textContent).toBe("User Test Cases")
  });
});
