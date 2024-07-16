import 'package:flutter/material.dart';
import 'package:test_login/github.dart';
import 'package:test_login/Tuto_Token.dart';
import 'package:http/http.dart';

class GitCommit_Page extends StatefulWidget {
  final String title;
  GitCommit_Page(this.title);

  @override
  State<GitCommit_Page> createState() => _GitCommit_PageState();
}

class _GitCommit_PageState extends State<GitCommit_Page> {
  void getToken(String name, String repo, String mail) async {
    if (mail == "") {
      mail = widget.title;
    } else
      mail = mail;
    try {
      Response response = await post(
        Uri.parse('http://10.0.2.2:8080/github/commit'),
        body: {"email": name, 'password': repo, "name": mail},
      );
      if (response.statusCode == 201) {
        print(response.statusCode);
        print('Token Sended');
      } else if (response.statusCode == 404) {
        print('Failed Sending Token');
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController username = TextEditingController();
    TextEditingController repository = TextEditingController();
    TextEditingController mail = TextEditingController();

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 61, 63, 61),
        title: const Text('Commit - Mail on Github'),
      ),
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            children: [
              const Text(
                'When someone commit on the repository you submitted, you will receive an email at the adress you submitted.',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(
                height: 10.0,
              ),
              TextButton(
                  child: const Text(
                    'How to get your token',
                    style: TextStyle(
                      color: Color.fromARGB(255, 57, 7, 240),
                    ),
                  ),
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => Tuto_Token_Page()),
                    );
                  }),
              TextField(
                  controller: username,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Token",
                    prefixIcon: Icon(Icons.token,
                        color: Color.fromARGB(255, 77, 76, 78)),
                  )),
              const SizedBox(
                height: 22.0,
              ),
              TextField(
                  controller: repository,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Repository",
                    prefixIcon: Icon(Icons.file_copy,
                        color: Color.fromARGB(255, 87, 85, 88)),
                  )),
              const SizedBox(
                height: 25.0,
              ),
              TextField(
                  controller: mail,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Email",
                    prefixIcon: Icon(Icons.mail,
                        color: Color.fromARGB(255, 87, 85, 88)),
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
                      print(mail.text);
                      getToken(username.text.toString(),
                          repository.text.toString(), mail.text.toString());
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => Github_Page(widget.title)));
                    },
                    child: const Text("Validate",
                        style: TextStyle(color: Colors.white))),
              ),
              const SizedBox(
                height: 200.0,
              ),
              Container(
                width: double.infinity,
                child: RawMaterialButton(
                    // reduce the size of the button

                    elevation: 0.0,
                    fillColor: Color.fromARGB(255, 236, 8, 8),
                    padding: const EdgeInsets.symmetric(vertical: 5.0),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.0)),
                    onPressed: () async {
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => Github_Page(widget.title)));
                    },
                    child: const Text("Back",
                        style: TextStyle(color: Colors.white))),
              ),
            ],
          )),
    );
  }
}
