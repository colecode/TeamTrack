<?php
// show potential errors / feedback (from registration object)
if (isset($registration)) {
    if ($registration->errors) {
        foreach ($registration->errors as $error) {
            echo $error;
        }
    }
    if ($registration->messages) {
        foreach ($registration->messages as $message) {
            echo $message;
        }
    }
}
?>

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

    <form method="post" action="register.php" name="registerform">

        <div class="form-group">
            <label for="login_input_username">Username</label>
            <input id="login_input_username" class="login_input form-control" type="text" pattern="[a-zA-Z0-9]{2,25}" name="user_name" required />
        </div>

        <div class="form-group">
            <label for="login_input_email">Email</label>
            <input id="login_input_email" class="login_input form-control" type="email" name="user_email" required />
        </div>

        <div class="form-group">
            <label for="login_input_password_new">Password (min. 6 characters)</label>
            <input id="login_input_password_new" class="login_input form-control" type="password" name="user_password_new" pattern=".{6,}" required autocomplete="off" />
        </div>

        <div class="form-group">
            <label for="login_input_password_repeat">Repeat password</label>
            <input id="login_input_password_repeat" class="login_input form-control" type="password" name="user_password_repeat" pattern=".{6,}" required autocomplete="off" />
        </div>

        <input type="submit" class="btn btn-primary" name="register" value="Register" />&nbsp;&nbsp;
        <a class="btn-btn default" href="index.php">Back to Login</a>

    </form>
</div>
</div>

</body>
</html>




