export default function({ $auth, redirect }) {

    //check loggedIn "true"
    if($auth.loggedIn) {

        //check role admin
        if($auth.strategy.name == "teacher") {

            return redirect('/guru/materi')

        }

        //check role customer
        if($auth.strategy.name == "student") {

            return redirect('/siswa/home')

        }
    }

}