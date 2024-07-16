import 'package:flutter/material.dart';
import 'package:test_login/home.dart';
import 'package:test_login/register.dart';
import 'package:http/http.dart';

class LoginScreen extends StatefulWidget {
  final String title;
  const LoginScreen(this.title);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  int logValue = 0;

  // Auth function for login page

  void login(String email, password) async {
    try {
      Response response = await post(
        Uri.parse('http://10.0.2.2:8080/auth/login'),
        body: {'email': email, 'password': password},
      );

      if (response.statusCode == 201) {
        print(response.statusCode);
        print('Login successfully');
        Navigator.of(context).pushReplacement(MaterialPageRoute(
            builder: (context) => Home_Logged(emailController.text)));
        logValue = 201;
      } else if (response.statusCode == 404) {
        print('Failed Connection');
        logValue = 0;
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    String mail = widget.title;
    return Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
            reverse: true,
            padding: const EdgeInsets.all(32),
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.only(top: 60.0),
                  child: Center(
                    child: Container(
                        width: 200,
                        height: 150,
                        decoration: BoxDecoration(
                            color: Color.fromARGB(255, 253, 253, 253),
                            borderRadius: BorderRadius.circular(100.0)),
                        child: Image.asset('assets/images/flutter-logo.png')),
                  ),
                ),
                const Text("Login",
                    style: TextStyle(
                      color: Color.fromARGB(255, 72, 71, 75),
                      fontSize: 44.0,
                      fontWeight: FontWeight.bold,
                    )),
                const SizedBox(
                  height: 44.0,
                ),
                TextField(
                    controller: emailController,
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: "Email",
                      prefixIcon: Icon(Icons.mail,
                          color: Color.fromARGB(249, 78, 76, 76)),
                    )),
                const SizedBox(
                  height: 26.0,
                ),
                TextField(
                    controller: passwordController,
                    obscureText: true,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: "Password",
                      prefixIcon: Icon(Icons.lock,
                          color: Color.fromARGB(255, 77, 76, 78)),
                    )),
                const SizedBox(
                  height: 12.0,
                ),
                const Text("Forgot your password ?",
                    style: TextStyle(color: Color.fromARGB(249, 78, 76, 76))),
                const SizedBox(
                  height: 88.0,
                ),
                Container(
                  width: double.infinity,
                  child: RawMaterialButton(
                      elevation: 0.0,
                      fillColor: Color.fromARGB(255, 75, 71, 71),
                      padding: const EdgeInsets.symmetric(vertical: 20.0),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12.0)),
                      onPressed: () {
                        login(emailController.text.toString(),
                            passwordController.text.toString());
                      },
                      child: const Text("Login",
                          style: TextStyle(color: Colors.white))),
                ),
                TextButton(
                    child: const Text(
                      'New user ? Create an account',
                      style: TextStyle(
                        color: Color.fromARGB(255, 73, 71, 70),
                      ),
                    ),
                    onPressed: () async {
                      Navigator.of(context).pushReplacement(
                          MaterialPageRoute(builder: (context) => Register()));
                      print('Pressed');
                    }),
                const SizedBox(height: 20.0),
              ],
            )));
  }
}
