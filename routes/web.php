<?php
use App\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// /return view('content.studentProfile', ['details' => $details],'var2' => $var2);
//return view('')->with('succes', 'message');mao na ang session

Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');

//link for pages
 Route::get('/','MasterController@index');
 Route::get('/listOfStudents','MasterController@listOfStudents');

 Route::get('/studentProfile/{holderID}','MasterController@studentProfile');


 // Generate data(passing of data(json,or any))
 Route::get('/studentLists', 'MasterController@generateStudentsList');
 Route::get('/profile', 'MasterController@studentProfile');
 Route::get('/studentProfile/{x}/fff', 'MasterController@gendata');
 Route::get('/studentProfile/{x}/ffff', 'MasterController@gendata2');
 Route::get('/filterStudents', 'MasterController@filterStudent');
 Route::get('/filterStudents/{x}', 'MasterController@endYear');
 Route::get('/filterStudents2/{x}', 'MasterController@endYear2');
 Route::get('/getFilterGraph/{to}/{from?}', 'MasterController@getCurrentGraph');
 Route::get('/summaryGraph','MasterController@getSummaryGraph');
 // Route::get('/getFilterGraph/{to}/{from}/{qwe}/{ewq}', 'MasterController@getCurrentGraph');
Route::post('/import/excel', 'MasterController@importStudentInformation');

Route::get('/getPrintData/{x}/{y?}', 'MasterController@getPrintData');

Route::get('/get/pdf/{x}/{y?}', 'MasterController@informationPDF');