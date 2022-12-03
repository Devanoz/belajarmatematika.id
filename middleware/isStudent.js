export default function({ $auth, redirect }) {

    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/')
    }

    //check admin role
    if($auth.strategy.name != "student") {
        return redirect('/')
    } else {
        return
    }

}