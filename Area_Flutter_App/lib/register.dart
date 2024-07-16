import 'package:flutter/material.dart';
import 'package:test_login/main.dart';
import 'package:http/http.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  void register(String email, password) async {
    try {
      Response response = await post(
        Uri.parse('http://10.0.2.2:8080/auth/register/'),
        body: {'email': email, 'password': password},
      );

      if (response.statusCode == 201) {
        print(response.statusCode);
        print('Create successfully');
      } else if (response.statusCode == 404) {
        print('Failed Creation');
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text('Register'),
        centerTitle: true,
        backgroundColor: Color.fromARGB(255, 110, 108, 112),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 50.0),
        child: Form(
          child: Column(
            children: [
              SizedBox(height: 20.0),
              TextField(
                  controller: emailController,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Email",
                    prefixIcon: Icon(Icons.mail,
                        color: Color.fromARGB(255, 72, 71, 73)),
                  )),
              const SizedBox(
                height: 26.0,
              ),
              TextField(
                  controller: passwordController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Password",
                    prefixIcon: Icon(Icons.lock,
                        color: Color.fromARGB(255, 75, 73, 77)),
                  )),
              SizedBox(height: 20.0),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  primary: Color.fromARGB(255, 92, 91, 95),
                  onPrimary: Colors.white,
                ),
                onPressed: () {
                  register(emailController.text.toString(),
                      passwordController.text.toString());
                  Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (context) => HomePage()));
                },
                child: Text('Register'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
