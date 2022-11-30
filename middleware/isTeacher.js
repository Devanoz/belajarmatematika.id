export default function({ $auth, redirect }) {

    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/teacher/login')
    }

    //check admin role
    if($auth.strategy.name != "teacher") {
        return redirect('/teacher/login')
    } else {
        return
    }

}