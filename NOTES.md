# Login Form

Have login page one component. No visual change other than added form component that is rendered if a user selects a checkbox or slider indicating they are a zookeeper.

Or have '/signup' always render zookeeper form and use '/signin' as main login page. Will need to extend Devise controller action to create user if username and password already exists.

Have route with '/sign_up#zookeeper=true' or something that will render page with form already?