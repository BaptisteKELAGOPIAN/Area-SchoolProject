import 'package:flutter/material.dart';
import 'package:test_login/main.dart';
import 'package:test_login/meteo.dart';
import 'package:test_login/github.dart';
import 'package:test_login/notion.dart';
import 'package:test_login/league.dart';

class Home_Logged extends StatefulWidget {
  final String title;
  Home_Logged(this.title);

  @override
  State<Home_Logged> createState() => _Home_LoggedState();
}

class _Home_LoggedState extends State<Home_Logged> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 75, 74, 78),
        title: const Text('Home'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(32),
        child: Column(
          children: [
            Container(
              width: double.infinity,
              child: RawMaterialButton(
                  elevation: 0.0,
                  fillColor: Color.fromARGB(255, 83, 83, 81),
                  padding: const EdgeInsets.symmetric(vertical: 20.0),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12.0)),
                  onPressed: () async {
                    String email = widget.title;
                    Navigator.of(context).pushReplacement(MaterialPageRoute(
                        builder: (context) => Github_Page(widget.title)));
                  },
                  child: const Text("Github",
                      style: TextStyle(color: Colors.white))),
            ),
            const SizedBox(
              height: 34.0,
            ),
            Container(
              width: double.infinity,
              child: RawMaterialButton(
                  elevation: 0.0,
                  fillColor: Color.fromARGB(255, 202, 236, 8),
                  padding: const EdgeInsets.symmetric(vertical: 20.0),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12.0)),
                  onPressed: () async {
                    Navigator.of(context).pushReplacement(
                        MaterialPageRoute(builder: (context) => Meteo_Page()));
                  },
                  child: const Text("Meteo",
                      style: TextStyle(color: Colors.white))),
            ),
            const SizedBox(
              height: 34.0,
            ),
            Container(
              width: double.infinity,
              child: RawMaterialButton(
                  elevation: 0.0,
                  fillColor: Color.fromARGB(255, 8, 133, 236),
                  padding: const EdgeInsets.symmetric(vertical: 20.0),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12.0)),
                  onPressed: () async {
                    Navigator.of(context).pushReplacement(MaterialPageRoute(
                        builder: (context) => Notion_Page(widget.title)));
                  },
                  child: const Text("Notion",
                      style: TextStyle(color: Colors.white))),
            ),
            const SizedBox(
              height: 34.0,
            ),
            Container(
              width: double.infinity,
              child: RawMaterialButton(
                  elevation: 0.0,
                  fillColor: Color.fromARGB(255, 171, 7, 221),
                  padding: const EdgeInsets.symmetric(vertical: 20.0),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12.0)),
                  onPressed: () async {
                    Navigator.of(context).pushReplacement(MaterialPageRoute(
                        builder: (context) => League_Page(widget.title)));
                  },
                  child: const Text("League Of Legends",
                      style: TextStyle(color: Colors.white))),
            ),
            const SizedBox(
              height: 270.0,
            ),
            Container(
              width: double.infinity,
              child: RawMaterialButton(
                  elevation: 0.0,
                  fillColor: Color.fromARGB(255, 236, 8, 8),
                  padding: const EdgeInsets.symmetric(vertical: 10.0),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12.0)),
                  onPressed: () async {
                    Navigator.of(context).pushReplacement(
                        MaterialPageRoute(builder: (context) => HomePage()));
                  },
                  child: const Text("Logout",
                      style: TextStyle(color: Colors.white))),
            ),
          ],
        ),
      ),
    );
  }
}
