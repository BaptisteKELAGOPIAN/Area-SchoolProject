import 'package:flutter/material.dart';
import 'package:test_login/home.dart';
import 'package:http/http.dart';

class Notion_Page extends StatefulWidget {
  final String title;
  Notion_Page(this.title);

  @override
  State<Notion_Page> createState() => _Notion_PageState();
}

class _Notion_PageState extends State<Notion_Page> {
  void getNotion(String key, String block) async {
    try {
      Response response = await post(
        Uri.parse('http://10.0.2.2:8080/notion/comment'),
        body: {"name": key, 'id': block},
      );
      if (response.statusCode == 201) {
        print(response.statusCode);
        print('Notion Sended');
      } else if (response.statusCode == 404) {
        print('Failed Sending Notion');
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController key = TextEditingController();
    TextEditingController block = TextEditingController();
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 26, 36, 182),
        title: const Text('Notion'),
      ),
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            children: [
              const Text(
                'When a comment is added to your block, you will receive an notification on Discord.',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(
                height: 10.0,
              ),
              TextField(
                  controller: key,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "API Key",
                    prefixIcon: Icon(Icons.key,
                        color: Color.fromARGB(255, 13, 13, 207)),
                  )),
              const SizedBox(
                height: 22.0,
              ),
              TextField(
                  controller: block,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Block ID",
                    prefixIcon: Icon(Icons.block,
                        color: Color.fromARGB(255, 12, 56, 199)),
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
                      getNotion(key.text.toString(), block.text.toString());
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
                    // reduce the size of the button

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
