<template>
  <div class="mainWrapper">
    <md-content>
      <h1>Full Stack Developer at <a href="https://gr360.com.br/" target="_blank">360 Group</a></h1>
      <md-divider></md-divider>
      <h4>Out/2019 - Dec/2019</h4>
      <md-divider></md-divider>
      <p>For Group 360, a financial and entertainment company,  I've started the <strong><a href="https://e-capital360.com/" target="_blank">E-Capital</a></strong> project, 
        application focused on investments, offering multiple cash applying modalities using different "wallets".</p>
      <md-divider></md-divider>
      <div class="techStack">
        <Icons techIcon="devicon-bootstrap-plain" tech="Bootstrap"/>
        <Icons techIcon="devicon-javascript-plain" tech="JavaScript"/>
        <Icons techIcon="devicon-jquery-plain" tech="JQuery"/>
        <Icons techIcon="devicon-php-plain" tech="PHP"/>
        <Icons techIcon="devicon-laravel-plain" tech="Laravel"/>
        <Icons techIcon="devicon-mysql-plain" tech="MySql"/>
      </div>
    </md-content>

    <md-content>
      <h1>Full Stack Developer at <a href="https://www.mandalaclothing.com.br/" target="_blank">Mandala Clothing</a></h1>
      <md-divider></md-divider>
      <h4>Jan/2020 - Oct/2020</h4>
      <md-divider></md-divider>
      <p>Mandala Clothing is a Fashion & Styling startup, it's business is based on receiving clients informations to 
        make a single and dedicated set of clothes accordingly to each client's preferences and than sending it to choose the liked one's with no appointment.
        With the tech team, I've been developing and maintaining the web applications responsible for all that business flow, beeing each one separated application on porpouse of:  
      </p>
      <md-list>
        <md-list-item>- Manage clients data accross CRUD operations</md-list-item>
        <md-list-item>- Manage in a centralized way products and orders data, including legal operations</md-list-item>
        <md-list-item>- The main entry for clients, where they could register and than control all order steps</md-list-item>
      </md-list>
      <md-divider></md-divider>
      <div class="techStack">
        <Icons techIcon="devicon-javascript-plain" tech="JavaScript"/>
        <Icons techIcon="devicon-typescript-plain" tech="Typescript"/>
        <Icons techIcon="devicon-angularjs-plain" tech="Angular"/>
        <Icons techIcon="devicon-nodejs-plain" tech="NodeJS"/>
        <Icons techIcon="devicon-mysql-plain" tech="MySql"/>
      </div>
    </md-content>

    <md-content>
      <h1>Full Stack Developer at <a href="http://l0gik.com.br/" target="_blank">L0gik</a></h1>
      <md-divider></md-divider>
      <h4>Nov/2020 - Apr/2021</h4>
      <md-divider></md-divider>
      <p>Working at L0gik, a general porpouses software agency, I performed Full Stack as close as Web Master, implementing many
        different solutions of Web duel the clients needs, like EMKT's, landing pages, SPA + REST API Web Apps, CMS based sites and even Database Administration.
      </p>
      <md-divider></md-divider>
      <div class="techStack">
        <Icons techIcon="devicon-php-plain" tech="PHP"/>
        <Icons techIcon="devicon-javascript-plain" tech="JavaScript"/>
        <Icons techIcon="devicon-jquery-plain" tech="JQuery"/>
        <Icons techIcon="devicon-vuejs-plain" tech="VueJS"/>
        <Icons techIcon="devicon-bootstrap-plain" tech="Bootstrap"/>
        <Icons techIcon="devicon-sass-original" tech="Sass"/>
        <Icons techIcon="devicon-wordpress-plain" tech="Wordpress"/>
        <Icons techIcon="devicon-mysql-plain" tech="MySql"/>
        <Icons techIcon="devicon-nodejs-plain" tech="NodeJS"/>
        <Icons techIcon="devicon-express-original" tech="Express"/>
        <Icons techIcon="devicon-mongodb-plain" tech="mongodb"/>
      </div>
    </md-content>

    <md-content>
      <h1>Back-end Developer at <a href="https://www.pixtertechnologies.com/" target="_blank">Pixter</a></h1>
      <md-divider></md-divider>
      <h4>May/2021 - Current Job</h4>
      <md-divider></md-divider>
      <p>Pixter is a self titled "software boutique" focused on offering squads and technologies resources for large projects, by large clients.
        Just joined recently in the goal to join the Back-End team whom creates NodeJS REST API's for serving data to Front-End apps. 
      </p>
      <md-divider></md-divider>
      <div class="techStack">
        <Icons techIcon="devicon-javascript-plain" tech="JavaScript"/>
        <Icons techIcon="devicon-nodejs-plain" tech="NodeJS"/>
        <Icons techIcon="devicon-express-original" tech="Express"/>
        <Icons techIcon="devicon-mongodb-plain" tech="mongodb"/>
      </div>
    </md-content>
  </div>
</template>

<script lang="ts">
export default({
})
</script>

<style lang="scss" scoped>
  .mainWrapper {
    overflow-y: auto;
  }

  * {
    display: block;
    margin: 0 auto;
  }

  .md-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 766.98px) {
      width: 75%;
    }
    
    a, strong {
      display: unset;
      margin: unset;
    }

    h1 {
      text-align: center;
      line-height: 1;

    }

    p {
      text-align: center;
    }
  }

  .md-list-item-content {
    min-height: unset !important;
  }

  .techStack {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }
</style>
