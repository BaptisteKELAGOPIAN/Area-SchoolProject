import 'package:flutter/material.dart';
import 'package:test_login/home.dart';
import 'package:test_login/git_commit_mail.dart';
import 'package:http/http.dart';

class Github_Page extends StatefulWidget {
  final String title;
  Github_Page(this.title);

  @override
  State<Github_Page> createState() => _Github_PageState();
}

class _Github_PageState extends State<Github_Page> {
  void getToken(String name, String repo) async {
    try {
      Response response = await post(
        Uri.parse('http://10.0.2.2:8080/github/commit'),
        body: {"email": name, 'password': repo, "name": widget.title},
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
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 61, 63, 61),
        title: const Text('Github'),
      ),
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            children: [
              Container(
                width: double.infinity,
                child: RawMaterialButton(
                    elevation: 0.0,
                    fillColor: Color.fromARGB(255, 66, 68, 66),
                    padding: const EdgeInsets.symmetric(vertical: 20.0),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.0)),
                    onPressed: () async {
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => GitCommit_Page(widget.title)));
                    },
                    child: const Text("Commit - Mail",
                        style: TextStyle(color: Colors.white))),
              ),
              const SizedBox(
                height: 550.0,
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
