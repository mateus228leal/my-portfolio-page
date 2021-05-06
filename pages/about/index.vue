<template>
  <div class="mainWrapper">
    <p>Older brother of two, Mateus Abilio Gomes Leal, was born in August 22, 1999 in Itaquera, São Paulo City, Brazil. Raised at the age of 8 years-old, 
      moved with family to Cachoeira Paulista, interior of the state of São Paulo where coursed High School, Technical Education and lived the most part of life.<br/>

      Had my first in 2015 contacts with computer programming at Technical Education (ETEC Marcos Uchôas dos Santos Penchel), where were first presented to programming algorithms & logics, HTML, CSS, PHP, Java and SQL, not being 
      in touch of development after concluding that same course.<br/>

      I've returned studies to technology now focused on Web Development in 2018, when joined FATEC Cruzeiro for
      System's Analisys and Development (Technologist graduation) having first contact with JavaScript at that same time.
      Yet in college was in touch with more core concepts of development in general, as OOP(deep dive), data structures and software engineering.<br/> 

      Started professional programming in Juny 2019, when got my first freelance job, being that one in question a desktop application,
      originally built using ElectronJS, working by myself already as a Full Stack. <br/>

      I left college yet in 2019, when was first hired for a full-time job in São Paulo City, moving again now all by my own and than never stopped coding again!<br/>
    </p>
    <h1>Curiosities about me:</h1>
    <md-list>
      <p class="md-list-item">My favorites fruits are avocade and pineapple!</p> 
      <p class="md-list-item">I can't have a nice and productive day without lifting some weights.</p>
      <p class="md-list-item">Honesty is the personality trait that I value most</p>
      <p class="md-list-item">Used to play violin when a child</p>
      <p class="md-list-item">Still wanting to get the skill of swimming</p>
    </md-list>
  </div>
</template>

<script lang="ts">
export default ({
  
})
</script>

<style lang="scss" scoped>
  .mainWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and(min-width: 992px) {
      max-width: 80vw;
    }
    margin: 0 auto;

    p {
      text-align: center;
    }

    h1 {
      margin: 1.5rem auto;
    }

    .md-list {
      padding: unset;
      display: flex;
      align-items: center;
      max-width: 100%;

      li.md-list-item {
        width: max-content;
        margin: unset;


      }
    }

    .md-list-item-container {
      font-size: 14px;
    }
  }
</style>

