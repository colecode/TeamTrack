<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Team Track</title>
  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link href='http://fonts.googleapis.com/css?family=Roboto:400,100' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <!--<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">-->

  <script data-main="js/main" src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.15/require.min.js"></script>

</head>
<body id="the-body">

<nav class="navbar navbar-default" style="margin-bottom:0px;">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-wrap">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#home">TeamTrack</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#teambuilder">Team Builder</a></li>
        <li><a href="#teammanager">Team Manager</a></li>
        <li><a href="#runnerslist">Browse My Runners Test</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Hey, <?php echo $_SESSION['user_name']; ?><span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="index.php?logout">Logout</a></li>
          </ul>
        </li>
        <li><a href="index.php?logout">Logout</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
</div><!-- .navbar-wrap -->
  </div><!-- /.container-fluid -->
</nav>

<!-- <div class="promo">
	<div class="navbar-wrap">
		<div class="my-jumbotron">
    		<h1>TeamTrack</h1>
    		<p>Follow your team.</p>
    		<button class="btn btn-primary" href="#createrunner">Let's get started</button>
    	</div>
	</div>
</div> -->

<div id="mainContent"></div>

<div id="footer"></div>

</body>
</html>
