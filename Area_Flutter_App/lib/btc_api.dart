import 'package:http/http.dart' as http;
import 'dart:convert';

//get bitcoin price
Future<double> getBTCPrice() async {
  var url = Uri.parse('https://api.coindesk.com/v1/bpi/currentprice.json');
  var response = await http.get(url);
  var data = jsonDecode(response.body);
  var price = data['bpi']['USD']['rate_float'];
  return price;
}
