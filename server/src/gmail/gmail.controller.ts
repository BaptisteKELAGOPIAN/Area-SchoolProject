import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GmailService } from './gmail.service';
import { CreateGmailDto } from './dto/create-gmail.dto';
import { UpdateGmailDto } from './dto/update-gmail.dto';
// import "https://apis.google.com/js/api.js";


@Controller('gmail')
export class GmailController {
  constructor(private readonly gmailService: GmailService) {}

  // connect gmail api
  @Get('bite')
  authorize() {
    const CLIENT_ID = '357463138962-kuh7djqihtkiulihcsb7o3qa3s2fpj05.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyD3XSfAqlDtMzQv-yqjQVb9G_gDjup3zcM';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
    const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
    console.log("authorize");

    //declare gmail
    let gmail = null;


    const {google} = require('googleapis');

    const auth = new google.auth.GoogleAuth({
      keyFile: 'AIzaSyD3XSfAqlDtMzQv-yqjQVb9G_gDjup3zcM',
      scopes: ['https://www.googleapis.com/auth/gmail'],
    });

    const getGmailApi = async () => {
      const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/gmail"],
      });
      // delegate to user on domain.
      auth.subject = process.env.GOOGLE_ADMIN_EMAIL;
      return gmail = google.gmail({version: 'v1', auth});
    };


//     //declare axios
//     const axios = require('axios').default;
// // open google in app mobile
//     const open = require('open');
//     const { google } = require('googleapis');
//     const OAuth2 = google.auth.OAuth2;
//     const url = require('url');

 

//     const oauth2Client = new OAuth2(
//       CLIENT_ID,
//       API_KEY,
//       'https://oauth2.example.com/'
//     );
//     const authUrl = oauth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: SCOPES,
//     });
//     console.log('Authorize this app by visiting this url:', authUrl);
//     open(authUrl);
  }


    // axios.get('https://www.google.com')
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
  
    

  @Post()
  create(@Body() createGmailDto: CreateGmailDto) {
    return this.gmailService.create(createGmailDto);
  }
  
  @Get()
  findAll() {
    return this.gmailService.findAll();  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gmailService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGmailDto: UpdateGmailDto) {
    return this.gmailService.update(+id, updateGmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gmailService.remove(+id);
  }


}