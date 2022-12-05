import React from "react";

const ForgotPassword = () => {
  return (
    <div>
      <div class="container mt-5 ">
        <div class="row justify-content-center ">
          <div class="col-md-4 col-md-offset-4 border">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3>
                    <i class="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
                    <form
                      id=""
                      role="form"
                      autocomplete="off"
                      class=""
                      method="post"
                    >
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="email address"
                            class="form-control"
                            type="email"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          name="recover-submit"
                          class="btn btn-lg btn-primary btn-block"
                          value="Reset Password"
                          type="submit"
                        />
                      </div>

                      <input
                        type="hidden"
                        class="hide"
                        name="token"
                        id="token"
                        value=""
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
