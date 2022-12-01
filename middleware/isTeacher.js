export default function({ $auth, redirect }) {

    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/auth/login')
    }

    //check admin role
    if($auth.strategy.name != "teacher") {
        return redirect('/auth/login')
    } else {
        return
    }

}