import 'package:flutter/material.dart';

class Tuto_Token_Page extends StatefulWidget {
  Tuto_Token_Page();

  @override
  State<Tuto_Token_Page> createState() => _Tuto_Token_PageState();
}

class _Tuto_Token_PageState extends State<Tuto_Token_Page> {
  @override
  Widget build(BuildContext context) {
    final token = TextEditingController();
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 61, 63, 61),
        title: const Text('Tuto Token'),
      ),
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            children: [
              const Text(
                '1. Go to your Github account\n'
                '2. Click on your profile picture\n'
                '3. Click on Settings\n'
                '4. Click on Developer settings\n'
                '5. Click on Personal access tokens\n'
                '6. Click on Fine-Grained tokens\n'
                '7. Click on Generate new token\n'
                '8. Enter a name for your token\n'
                '9. Select the scope you want\n'
                '10. Click on Generate token\n'
                '11. Copy the token\n'
                '12. Paste the token in the field\n',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
            ],
          )),
    );
  }
}
