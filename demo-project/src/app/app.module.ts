import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextToSpecificLengthPipe } from './pipes/text-to-specific-length.pipe';
import { ThemeDirective } from './directives/theme.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { OverviewComponent } from './components/overview/overview.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    TaskListComponent,
    MainComponent,
    SignupComponent,
    MydirectiveDirective,
    TabsComponent,
    TextToSpecificLengthPipe,
    ThemeDirective,
    ProfileComponent,
    OverviewComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
