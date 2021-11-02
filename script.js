new Vue({
  el: "#flashcards-app",
  data: {
    questionIn:"",
    answerIn:"",
    categoryIn:"",
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },
  methods: {
    newCard(Q,A,C){
   this.cards.push({
     question: Q,
     answer:A,
     category:C,
     flipped:false})
    },
            
        
    
    
  flipCard: function(idx){
    this.cards[idx].flipped=!this.cards[idx].flipped
  }
  }
}
)