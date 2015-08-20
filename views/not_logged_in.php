

<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Team Track</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body id="the-body">

<div class="container"> 
<!-- login form box -->
<div id="login-box">

    <div class="alert alert-info" role="alert">
            <?php
                // show potential errors / feedback (from login object)
                if (isset($login)) {
                    if ($login->errors) {
                        foreach ($login->errors as $error) {
                            echo $error;
                        }
                    }
                    if ($login->messages) {
                        foreach ($login->messages as $message) {
                            echo $message;
                        }
                    }
                }
                ?>
    </div>

    <form method="post" action="index.php" name="loginform">

        <div class="form-group">
            <label for="login_input_username">Username</label>
            <input id="login_input_username" class="login_input form-control" type="text" name="user_name" required />
        </div>

        <div class="form-group">
            <label for="login_input_password">Password</label>
            <input id="login_input_password" class="login_input form-control" type="password" name="user_password" autocomplete="off" required />
        </div>

        <input type="submit" class="btn btn-primary" name="login" value="Log in" />&nbsp;&nbsp;
        <a class="btn-btn default" href="register.php">Create New Account</a>

    </form>
</div>
</div>

</body>
</html>
