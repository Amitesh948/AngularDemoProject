import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem("token");
    const cloneRequest = request.clone({
      // setHeaders: {
      //   "Content-Type": "application/json",
      //   Authorization: authToken ? `Bearer ${authToken}` : ''
      // }
    });

    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error occurred:', error);
        if (error.status === 401) {
          console.warn('Unauthorized access - possibly invalid token');
        } else if (error.status === 403) {
          console.warn('Forbidden - you do not have access to this resource');
        } else {
          console.error('Unhandled error:', error.message);
        }
        return throwError(() => new Error(error.message || 'Server error'));
      })
    );
  }
}
