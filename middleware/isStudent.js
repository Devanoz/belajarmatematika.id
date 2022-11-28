export default function({ $auth, redirect }) {

    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/student/login')
    }

    //check admin role
    if($auth.strategy.name != "student") {
        return redirect('/student/login')
    } else {
        return
    }

}