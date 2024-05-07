import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      logo: 'adjust-circle',
      title: 'Christ Centred',
      desc: 'We believe that Christ is the head of the church. Therefore, we will exalt the Lord Jesus Christ to the highest in our worship, teaching, preaching, and ministry. He is the author of our salvation and the focus of our faith. Scripture says putting Him at the center of all we do pleases the Father.'
    },
    {
      logo: 'adjust-circle',
      title: 'Spirit Formed',
      desc: 'We desire to be a church with increasing passion to experience the fullness of the Holy Spirit, expressed in the way we live and do ministry, individually and corporately.'
    },
    {
      logo: 'adjust-circle',
      title: 'Bible Based',
      desc: 'We believe that Bible-based teaching and preaching honor God and edify people. We also believe that our ministry should reflect the highest commitment to the integrity of interpreting biblical truth and applying it.'
    },
    {
      logo: 'adjust-circle',
      title: 'Sabbath Celebrating',
      desc: 'We believe that being fully Christ centered and worshipping on the Sabbath are not in conflict. The Sabbath has never been more relevant than it is in today’s world, filled with weary people.'
    },
    {
      logo: 'adjust-circle',
      title: 'Distinct Yet Inclusive',
      desc: 'We believe that the kingdom of God extends beyond our denomination, that we are only a small part of the body of Christ, and that we have a legitimate place within, and responsibility to, the rest of the Christian community.'
    },
    {
      logo: 'adjust-circle',
      title: 'Passionate in Worship',
      desc: 'We believe that worship is a primary means by which we express our love for the Lord and that it should be a priority of the church. Spiritual passion in worshipping the Lord agrees with Scripture and demonstrates our deepening relationship with Him.'
    },
    {
      logo: 'adjust-circle',
      title: 'Compassionate in Service',
      desc: 'We believe that genuine love for the Lord will be transformed into ministry to others. Reaching out to the world through compassionate service honors the Lord and points people to Him.'
    },
    {
      logo: 'adjust-circle',
      title: 'Engaging in witness',
      desc: 'We believe that lost people matter to God, that the church has a mandate to evangelize, that each member has a role in that process, and that world conditions call us to be aggressive about winning the lost.'
    },
    {
      logo: 'adjust-circle',
      title: 'United in Fellowship',
      desc: 'We believe that a strong commitment to Christ calls us to a strong commitment to His church body. Building up the church through fellowship and through understanding, developing, and exercising our spiritual gifts is important.'
    },
    {
      logo: 'adjust-circle',
      title: 'Committed in Discipleship',
      desc: 'We believe that the goal of faith is to be conformed to the image of Christ, which happens best through the process of mentoring and discipleship. A healthy church is the result of the healthy spiritual development of individual believers.'
    },
  ]
}
