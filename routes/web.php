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

//Auth::routes();

//link for pages
 Route::get('/','MasterController@index');
 Route::get('/listOfStudents','MasterController@listOfStudents');

 Route::get('/studentProfile/{holderID}','MasterController@studentProfile');


 // Generate data(passing of data(json,or any))
 Route::get('/studentLists', 'MasterController@generateStudentsList');
 Route::get('/profile', 'MasterController@studentProfile');
 // Route::get('/studentRadarData/{x}', 'MasterController@generateRadarData');

