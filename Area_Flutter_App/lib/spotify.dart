import 'package:flutter/material.dart';
import 'package:test_login/home.dart';

class Spotify_Page extends StatefulWidget {
  Spotify_Page();

  @override
  State<Spotify_Page> createState() => _Spotify_PageState();
}

class _Spotify_PageState extends State<Spotify_Page> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 25, 223, 25),
        title: const Text('Spotify'),
      ),
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            children: [
              const SizedBox(
                height: 500.0,
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
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => Home_Logged("null")));
                    },
                    child: const Text("Validate",
                        style: TextStyle(color: Colors.white))),
              ),
              const SizedBox(
                height: 30.0,
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
