
@extends('layouts.app') 
@section('content')

<div class="col-md-12">
<!-- Example Pie Chart Card-->
       <div class="card mb-3 text-center">
            <div class="card-header" style="background-color: #002663; color: white;">
             <strong> <i class="fa fa-address-book-o"></i> List of Students</div></strong>
            <div class="card-body">

<table id="StudentList" class="table">
    <thead class="nosort thead-light">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Year Level</th>
            <th>Section</th>
            <th>Action</th>   </tr>
    </thead>
</table>
<br>
</div>
</div>
</div>

@stop()

@section('script')
    <script type="text/javascript" src="{{asset('public/assets/js/sample.js')}}"></script>
@endsection

