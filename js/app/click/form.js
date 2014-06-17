// $(document).on("ready", function () {
//   if (!app.loggedIn) {
//     app.router.navigate('#login', {trigger: true});
//     window.setTimeout(function(){
//       if  (window.localStorage.getItem("username") !== null && window.localStorage.getItem("password") !== null) {
//         $('body').find('#username').val(window.localStorage.getItem("username"));
//         $('body').find('#password').val(window.localStorage.getItem("password"));
//         $('body').find('.submit-form').click();
//       };
//     }, 1000);
//   };

//   $( "body" ).on( "click", '.submit-form', function( event ) {
//     $(this).append("<i class='fa fa-spinner fa-spin'></i>");
//     var form = $(this).closest('form'),
//     username = form.find('#username').val(),
//     password = form.find('#password').val();

//     $.post(form.attr('action'), form.serialize()).done(function(data){
//       window.localStorage.setItem("username", username);
//       window.localStorage.setItem("password", password);
//       window.sessionStorage.setItem('key', data.session);
//       app.loggedIn = window.sessionStorage.getItem("key") !== null;
//       window.scrollTo(0,0);
//       app.router.navigate(form.attr('target'), {trigger: true});
//     }).done(function(){
//       app.router.navigate('#login', {trigger: true});
//     });
//   });
// });