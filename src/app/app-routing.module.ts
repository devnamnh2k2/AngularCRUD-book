import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { LayoutComponent } from './components/layouts/main-layout/layout/layout.component';
const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'search',
  //   pathMatch:'full'
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'search',
        component: SearchComponent,
        title:'Search Book',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
