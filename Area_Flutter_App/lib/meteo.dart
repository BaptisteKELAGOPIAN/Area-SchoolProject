import 'package:flutter/material.dart';
import 'package:test_login/home.dart';
import 'package:http/http.dart';

class Meteo_Page extends StatefulWidget {
  Meteo_Page();

  @override
  State<Meteo_Page> createState() => _Meteo_PageState();
}

class _Meteo_PageState extends State<Meteo_Page> {
  void getMeteo(String meteo) async {
    try {
      Response response = await post(
        Uri.parse('http://10.0.2.2:8080/meteo/city'),
        body: {"name": meteo},
      );

      if (response.statusCode == 201) {
        print(response.statusCode);
        print('City Sended');
      } else if (response.statusCode == 404) {
        print('Failed Sending City');
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController city = TextEditingController();
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 223, 219, 25),
        title: const Text('Meteo'),
      ),
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            children: [
              const Text(
                'Each time the temperature switch in the city you write, you will receive an email at the adress email you login.',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(
                height: 10.0,
              ),
              TextField(
                  controller: city,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "City",
                    prefixIcon: Icon(Icons.sunny,
                        color: Color.fromARGB(255, 224, 228, 12)),
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
                      getMeteo(city.text.toString());
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => Home_Logged("null")));
                    },
                    child: const Text("Validate",
                        style: TextStyle(color: Colors.white))),
              ),
              const SizedBox(
                height: 400.0,
              ),
              Container(
                width: double.infinity,
                child: RawMaterialButton(
                    elevation: 0.0,
                    fillColor: const Color.fromARGB(255, 236, 8, 8),
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
