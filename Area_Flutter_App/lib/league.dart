import 'package:flutter/material.dart';
import 'package:test_login/home.dart';
import 'package:http/http.dart';

class League_Page extends StatefulWidget {
  final String title;
  League_Page(this.title);

  @override
  State<League_Page> createState() => _League_PageState();
}

class _League_PageState extends State<League_Page> {
  void getPseudo(String name, String email) async {
    if (email == "") {
      email = widget.title;
    } else
      email = email;
    try {
      Response response = await post(
        Uri.parse('http://10.0.2.2:8080/riot/pseudo'),
        body: {"name": name, 'email': email},
      );
      if (response.statusCode == 201) {
        print(response.statusCode);
        print('League Sended');
      } else if (response.statusCode == 404) {
        print('Failed Sending League');
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController name = TextEditingController();
    TextEditingController email = TextEditingController();
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 104, 11, 211),
        title: const Text('League Of Legends'),
      ),
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            children: [
              const Text(
                'When a player is in a game you will recieve an email at the adress you submitted.',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(
                height: 10.0,
              ),
              TextField(
                  controller: name,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Player Name",
                    prefixIcon: Icon(Icons.leaderboard,
                        color: Color.fromARGB(255, 143, 13, 218)),
                  )),
              const SizedBox(
                height: 22.0,
              ),
              TextField(
                  controller: email,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Email",
                    prefixIcon: Icon(Icons.email,
                        color: Color.fromARGB(255, 103, 14, 187)),
                  )),
              const SizedBox(
                height: 25.0,
              ),
              Container(
                width: double.infinity,
                child: RawMaterialButton(
                    elevation: 0.0,
                    fillColor: Color.fromARGB(255, 8, 236, 19),
                    padding: const EdgeInsets.symmetric(vertical: 20.0),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.0)),
                    onPressed: () async {
                      getPseudo(name.text.toString(), email.text.toString());
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => Home_Logged("null")));
                    },
                    child: const Text("Validate",
                        style: TextStyle(color: Colors.white))),
              ),
              const SizedBox(
                height: 350.0,
              ),
              Container(
                width: double.infinity,
                child: RawMaterialButton(
                    elevation: 0.0,
                    fillColor: Color.fromARGB(255, 236, 8, 8),
                    padding: const EdgeInsets.symmetric(vertical: 5.0),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.0)),
                    onPressed: () async {
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => Home_Logged("null")));
                    },
                    child: const Text("Back",
                        style: TextStyle(color: Colors.white))),
              ),
            ],
          )),
    );
  }
}
