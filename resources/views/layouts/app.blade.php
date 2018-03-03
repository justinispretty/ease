<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="csrf_token" content="{{ csrf_token() }}" />
  <title>EASE System</title>
  <!-- Bootstrap core CSS-->

  <link href="{{asset('public/assets/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="{{asset('public/assets/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="{{asset('public/assets/datatables/dataTables.bootstrap4.css')}}" rel="stylesheet">
  <link href="{{asset('public/assets/css/material-icons.css')}}" rel="stylesheet">
  <link href="{{asset('public/assets/bootstrap/js/bootstrap.min.js')}}" rel="stylesheet">
  <!-- Custom styles for this template-->
    <link href="{{asset('public/assets/css/sb-admin.css')}}" rel="stylesheet">
 @yield('css')
</head>

<body class="fixed-nav sticky-footer" id="page-top">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.html"><h3><strong>EASE SYSTEM</strong></h3></a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link" href="index.html">
            <i class="fa fa-fw fa-dashboard"></i>
            <strong><span class="nav-link-text nav-color">Home</span></strong>
          </a>
        </li>
        
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a class="nav-link" href="{{ url('/listOfStudents') }}">
            <i class="fa fa-fw fa-table"></i>
            <strong><span class="nav-link-text nav-color" sty>List of students</span></strong>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a class="nav-link" href="{{ url('/filterStudents') }}">
            <i class="fa fa-fw fa-table"></i>
            <strong><span class="nav-link-text nav-color" sty>Data Visualization</span></strong>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
     <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>

 

  

<main>
<div class="content-wrapper">
    <div class="container-fluid"> 
@yield('content')
 </div>
 </div>
</main>



    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>EASE SYSTEM 2018</small>
        </div>
      </div>
    </footer>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- Logout Modal-->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap core JavaScript-->
    <script type="text/javascript" src="{{asset('public/assets/js/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <!-- Core plugin JavaScript-->
    <script type="text/javascript" src="{{asset('public/assets/jquery-easing/jquery.easing.min.js')}}"></script>
    <!-- Page level plugin JavaScript-->
    <script type="text/javascript" src="{{asset('public/assets/chart.js/Chart.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/datatables/jquery.dataTables.js')}}"></script>
    <script type="text/javascript" src="{{asset('public/assets/datatables/dataTables.bootstrap4.js')}}"></script>
    <!-- Custom scripts for all pages-->
    <script type="text/javascript" src="{{asset('public/assets/js/sb-admin.min.js')}}"></script>
    <!-- Custom scripts for this page-->

    @yield('script')
</body>

</html>
