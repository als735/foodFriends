(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(79)},45:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setUser",function(){return f}),a.d(n,"setMacros",function(){return b}),a.d(n,"setWeight",function(){return N}),a.d(n,"setLife",function(){return C}),a.d(n,"setRecipe",function(){return O}),a.d(n,"setIngredients",function(){return w}),a.d(n,"setRecipeNutrition",function(){return y});var r=a(0),l=a.n(r),i=a(21),c=a.n(i),s=(a(45),a(1)),o=a(2),m=a(4),u=a(3),h=a(5),p=a(9),d=a(17),g=a(16),E=a(7),A=a.n(E),v=a(6),f=(a(67),function(e){return{type:"setUser",payload:e}}),b=function(e){return{type:"setMacros",payload:e}},N=function(e){return{type:"setWeight",payload:e}},C=function(e){return{type:"setLife",payload:e}},O=function(e){return{type:"setRecipe",payload:e}},w=function(e){return{type:"setIngredients",payload:e}},y=function(e){return{type:"setRecipeNutrition",payload:e}},I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){A.a.post("api/auth/logout").then(function(e){e.success&&a.props.setUser(e)})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"headerPage"},l.a.createElement("div",null,l.a.createElement("div",{className:"navImages"},l.a.createElement(p.b,{to:"/",className:"logout"},l.a.createElement("img",{className:"logout",src:j,alt:"",onClick:this.logout}))),l.a.createElement("h1",{id:"header1"}," Friends ",l.a.createElement("i",null,"with")," Food")))}}]),t}(r.Component),M=Object(v.b)(function(e){return e},n)(I),j="data:image/png;base64,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",B=(a(69),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).authMe=function(){A.a.get("/api/auth/me").then(function(e){e.data?(a.props.setUser(e.data.user),a.props.setWeight(e.data.weight),a.props.setMacros(e.data.macros)):a.props.history.push("/")}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.authMe()}},{key:"render",value:function(){var e={yourFace:"url(".concat(this.props.user.prof_pic,")")};return l.a.createElement("div",{className:"navPage"},l.a.createElement(M,null),l.a.createElement("div",{className:"navBar"},l.a.createElement("div",null,l.a.createElement(p.b,{to:"/home",className:"linksHome"},l.a.createElement("img",{className:"navieButton",src:F,alt:""}))),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/goals",className:"links"},"Goals")),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/recipeForm",className:"links"},"Make a Meal")),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/lunchbox",className:"links"},"Lunch Box")),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/planning",className:"links"},"Meal Plan")),l.a.createElement("div",{className:"prof_pic",style:{backgroundImage:e.yourFace}}),l.a.createElement("div",{className:"listingUser",onClick:this.authMe},this.props.user.first_name," ",this.props.user.last_name)))}}]),t}(r.Component)),x=Object(v.b)(function(e){return e},n)(B),F="data:image/png;base64,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",G=(a(70),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.login=function(){var e={email:a.state.email,password:a.state.password};A.a.post("/api/auth/login",e).then(function(e){var t=e.data;t.success?(a.props.setUser(t.user),a.props.history.push("/home")):alert("Invalid Username or Password")})},a.handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(g.a)({},r,n)),console.log("state change",a.state)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"authPage"},l.a.createElement("div",{className:"mainAuth"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ",l.a.createElement("div",{className:"authieTitleBox"},l.a.createElement("div",{className:"authieTitle"},l.a.createElement("h1",{className:"friendsFood"}," ",l.a.createElement("i",null,"F"),"riends ",l.a.createElement("i",null,"with")," ",l.a.createElement("i",null,"F"),"ood "))),l.a.createElement("div",{className:"authieBox"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Email:",l.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleInputChange}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Password:",l.a.createElement("input",{type:"text",name:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("button",{className:"loginButt",onClick:this.login},"Login")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/register"},"Register Here"))))),l.a.createElement("div",{className:"coolBox2"}),l.a.createElement("div",null))}}]),t}(r.Component)),R=Object(v.b)(function(e){return e},n)(G),_=(a(71),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={calories:"",net_carbs:"",protein:"",fat:"",current_weight:"",goal_weight:"",life_goal:""},a.updateMacros=function(e){var t={macros_id:a.props.macros.macros_id,columnName:e,value:a.state[e]};A.a.put("/api/goals/macros",t).then(function(e){var t=e.data;t?a.props.setMacros(t[0]):alert("Invalid Update"),console.log(t.macros,"data")})},a.updateWeight=function(e){var t={weight_id:a.props.weight.weight_id,columnName:e,value:a.state[e]};A.a.put("/api/goals/weight",t).then(function(e){var t=e.data;t?a.props.setWeight(t[0]):alert("Invalid Update"),console.log(t.weight,"data")})},a.handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(g.a)({},r,n)),console.log("state change",a.state)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props,"props"),l.a.createElement("div",{className:"goalsPage"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"titlePage"},"Goals")),l.a.createElement("div",{className:"homePage"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ")),l.a.createElement("div",null,l.a.createElement("h1",{className:"macrosTitle"},"Macros")),l.a.createElement("div",null,l.a.createElement("div",{className:"macroLabels"},l.a.createElement("h2",{className:"macroLabelsCals"},"Calories"),l.a.createElement("h2",{className:"macroLabelsCarbs"},"Net Carbs"),l.a.createElement("h2",{className:"macroLabelsProtein"},"Protein"),l.a.createElement("h2",{className:"macroLabelsFat"},"Fat")),l.a.createElement("div",{className:"usersMacrosCurrentStats"},l.a.createElement("h3",{className:"caloriesCurrentStats"},this.props.macros.calories),l.a.createElement("h3",{className:"netCarbsCurrentStats"},this.props.macros.net_carbs),l.a.createElement("h3",{className:"proteinCurrentStats",id:"proteinCurrent"},this.props.macros.protein),l.a.createElement("h3",{className:"fatCurrentStats"},this.props.macros.fat)),l.a.createElement("div",{className:"editMacros"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"calsEditMacros"}," Calories",l.a.createElement("input",{type:"text",name:"calories",value:this.state.calories,onChange:this.handleInputChange})),l.a.createElement("button",{className:"editButtons",onClick:function(){e.updateMacros("calories")}},"Edit")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"netCarbsEditMacros"}," Net Carbs",l.a.createElement("input",{type:"text",name:"net_carbs",value:this.state.net_carbs,onChange:this.handleInputChange})),l.a.createElement("button",{className:"editButtons",onClick:function(){e.updateMacros("net_carbs")}},"Edit")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"proteinEditMacros"}," Protein",l.a.createElement("input",{type:"text",name:"protein",value:this.state.protein,onChange:this.handleInputChange})),l.a.createElement("button",{className:"editButtons",onClick:function(){e.updateMacros("protein")}},"Edit")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"fatEditMacros"}," Fat",l.a.createElement("input",{type:"text",name:"fat",value:this.state.fat,onChange:this.handleInputChange})),l.a.createElement("button",{className:"editButtons",onClick:function(){e.updateMacros("fat")}},"Edit"))),l.a.createElement("div",null,l.a.createElement("h1",{className:"weightTitle"},"Weight")),l.a.createElement("div",{className:"weightLabels"},l.a.createElement("h2",{className:"currentWeightLabels"},"Current Weight"),l.a.createElement("h2",{className:"goalWeightLabels"},"Goal Weight")),l.a.createElement("div",{className:"usersWeightCurrentStats"},l.a.createElement("h3",{className:"weightCurrent"},this.props.weight.current_weight),l.a.createElement("h3",{className:"goalWeight"},this.props.weight.goal_weight)),l.a.createElement("div",{className:"editWeight"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"currentWeightEdit"}," Current Weight",l.a.createElement("input",{type:"text",name:"current_weight",value:this.state.current_weight,onChange:this.handleInputChange})),l.a.createElement("button",{className:"editButtons",onClick:function(){e.updateWeight("current_weight")}},"Edit")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"goalWeightEdit"}," Goal Weight",l.a.createElement("input",{type:"text",name:"goal_weight",value:this.state.goal_weight,onChange:this.handleInputChange})),l.a.createElement("button",{className:"editButtons",onClick:function(){e.updateWeight("goal_weight")}},"Edit"))),l.a.createElement("div",{className:"lifeGoalsBox"},l.a.createElement("textarea",{name:"lifeGoals",id:"",onChange:this.handleInputChange,className:"lifeGoalsBox"}),l.a.createElement("div",{className:"goalButtonBox"},l.a.createElement("button",{className:"addGoalsButton"},"Add"),l.a.createElement("button",{className:"deleteGoalsButton"},"Delete"))))))}}]),t}(r.Component)),k=Object(v.b)(function(e){return e},n)(_),W=(a(72),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"groceryPage"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ","Groceries")}}]),t}(r.Component)),P=(a(73),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"titlePage"},"Home")),l.a.createElement("div",{className:"homePage"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"introH"},"What is Food ",l.a.createElement("i",null,"with")," Friends?"),l.a.createElement("p",{className:"introP"}," Food ",l.a.createElement("i",null,"with")," Friends is an application that encourages you to become friends with food. So often in our lives we are unhappy due to the food we are eating, and our relationship to...."))))}}]),t}(r.Component)),U=(a(74),a(75),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={title:"",recipe_pic:"",profile_picture:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.b,{to:"/mealCard/".concat(this.props.recipes_id)},l.a.createElement("div",{className:"lunchBoxBox"},l.a.createElement("div",{className:"lunchBoxTile"},l.a.createElement("h2",null,this.props.title),l.a.createElement("img",{className:"lunchBoxImage",src:this.props.recipe_pic,alt:""})))))}}]),t}(r.Component)),Q=Object(v.b)(function(e){return e},n)(U),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={recipe_pic:"",listOfRecipes:[],listOfIngredients:[],listOfNutrition:[]},a.getRecipes=function(){A.a.get("/api/recipe/retrieve").then(function(e){e.data?a.setState({listOfRecipes:e.data.recipes,listOfIngredients:e.data.ingredients,listOfNutrition:e.data.nutrition}):alert("No Recipes")})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){var e=this.state.listOfRecipes.map(function(e,t){return l.a.createElement(Q,{key:t,index:t,recipes_id:e.recipes_id,title:e.title,recipe_pic:e.recipe_pic})});return l.a.createElement("div",{className:"lunchBoxPage"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Lunch Box")),l.a.createElement("div",{className:"homePage"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"recipesInBox"},e))))}}]),t}(r.Component),D=Object(v.b)(function(e){return e},n)(T),z=(a(76),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={ingredient:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.ingredient)}}]),t}(r.Component)),J=Object(v.b)(function(e){return e},n)(z),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:"",calories:"",recipe_calories:"",net_carbs:"",recipe_net_carbs:"",protein:"",recipe_protein:"",fat:"",recipe_fat:"",title:"",instructions:"",recipe_pic:"",listOfRecipes:[],listOfIngredients:[],listOfNutrition:[]},a.getThisRecipe=function(){A.a.get("/api/recipe/retrieveOne/?recipes_id=".concat(a.props.match.params.recipes_id)).then(function(e){a.setState({title:e.data.recipes.title,recipe_pic:e.data.recipes.recipe_pic,instructions:e.data.recipes.instructions,listOfIngredients:e.data.ingredients,recipe_calories:e.data.nutrition.recipe_calories,recipe_protein:e.data.nutrition.recipe_protein,recipe_net_carbs:e.data.nutrition.recipe_net_carbs,recipe_fat:e.data.nutrition.recipe_fat,recipe_yield:e.data.nutrition.recipe_yields})})},a.deleteThisRecipe=function(){A.a.delete("/api/recipe/delete?recipes_id=".concat(a.props.match.params.recipes_id)).then(function(e){var t=e.data;t?(a.props.setRecipe(t.recipes),a.props.history.push("/home")):alert("Could not delete")})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getThisRecipe()}},{key:"render",value:function(){var e=this,t=this.state.listOfIngredients.map(function(e,t){return l.a.createElement(J,{key:t,index:t,ingredient:e.ingredient})}),a=this.state.calories-this.state.recipe_calories,n=this.state.net_carbs-this.state.recipe_net_carbs,r=this.state.protein-this.state.recipe_protein,i=this.state.fat-this.state.recipe_fat;return l.a.createElement("div",{className:"mealCardPage"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"titlePage"},"Meal")),l.a.createElement("div",{className:"homePage"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ")),l.a.createElement("div",null,l.a.createElement("div",{className:"lunchCard"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"recipeTitle"},this.state.title)),l.a.createElement("div",{className:"recipeDetails"},l.a.createElement("div",null,l.a.createElement("div",{className:"ingredientsBox"},l.a.createElement("h2",{className:"list"},"Ingredients List: "),l.a.createElement("div",{className:"list"},t))),l.a.createElement("div",{className:"usersMealMacros"},l.a.createElement("h2",null," Meal's Macros:"),l.a.createElement("h3",{className:""},"Yields:",this.state.recipe_yield),l.a.createElement("h3",{className:"perServing"}," Macros Per Serving"),l.a.createElement("h3",{className:""},"Calories: ",this.state.recipe_calories),l.a.createElement("h3",{className:""},"Net Carbs: ",this.state.recipe_net_carbs," "),l.a.createElement("h3",{className:"",id:""},"Protein: ",this.state.recipe_protein," "),l.a.createElement("h3",{className:""},"Fat: ",this.state.recipe_fat," ")),l.a.createElement("div",{className:"usersMealMacros"},l.a.createElement("h2",null," Daily Remainder:"),l.a.createElement("h3",{className:""},"Calories: ",a),l.a.createElement("h3",{className:""},"Net Carbs: ",n),l.a.createElement("h3",{className:"",id:""},"Protein: ",r),l.a.createElement("h3",{className:""},"Fat: ",i)))),l.a.createElement("div",{className:"instructImage"},l.a.createElement("div",{className:"instructionsBox"},l.a.createElement("h2",null,"Instructions:"),l.a.createElement("div",{className:"list"},this.state.instructions)),l.a.createElement("img",{className:"mealCardImage",src:this.state.recipe_pic,alt:""})),l.a.createElement("button",{className:"deleteMealButt",onClick:function(){e.deleteThisRecipe()}},"Delete Meal"))))}}]),t}(r.Component),X=Object(v.b)(function(e){return e},n)(S),L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"planPage"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Meal Plan")),l.a.createElement("div",{className:"homePage"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"introH"},"What is Food ",l.a.createElement("i",null,"with")," Friends?"),l.a.createElement("p",{className:"introP"}," Food ",l.a.createElement("i",null,"with")," Friends is an application that encourages you to become friends with food. So often in our lives we are unhappy due to the food we are eating, and our relationship to...."))))}}]),t}(r.Component),V=a(39),H=(a(77),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",recipe_pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb",ingredientArr:[],ingredient:"",instructions:"",recipes:[],selectedRecipe:{},recipe_yield:1,recipe_calories:"",recipe_fat:"",recipe_net_carbs:"",recipe_protein:""},a.createMeal=function(){var e={title:a.state.title,recipe_pic:a.state.recipe_pic,instructions:a.state.instructions,ingredients:a.state.ingredientArr,recipe_calories:a.state.recipe_calories,recipe_net_carbs:a.state.recipe_net_carbs,recipe_fat:a.state.recipe_fat,recipe_protein:a.state.recipe_protein,recipe_yield:a.state.recipe_yield};A.a.post("/api/recipe/addRecipe",e).then(function(e){var t=e.data;t?(a.props.setRecipe(t.recipe),a.props.setIngredients(t.savedIngredients),a.props.setRecipeNutrition(t.nutrition),a.props.history.push("/lunchBox")):alert("Invalid Meal Card")})},a.handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(g.a)({},r,n))},a.handleIngredientsClick=function(e){e.preventDefault(),a.setState({ingredientArr:[].concat(Object(V.a)(a.state.ingredientArr),[a.state.ingredient])}),console.log(a.state,"state2")},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){console.log("props",this.props);var e=this.state.ingredientArr.map(function(e,t){return l.a.createElement("li",{key:t},e)});return l.a.createElement("div",{className:"recipeFormPage"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Make a Meal")),l.a.createElement("div",{className:"homePage"},"/"!==this.props.location.pathname?l.a.createElement(x,null):" ")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"mealTitle"},"Create a New Meal!"),l.a.createElement("div",null,l.a.createElement("div",{className:"newMealBox"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"newMealTitle"},"Meal title:",l.a.createElement("input",{className:"sizeMealInput",type:"text",name:"title",size:"50",value:this.state.title,onChange:this.handleInputChange}),l.a.createElement("button",{className:"makeMealButton",onClick:this.createMeal},"Make this Meal!")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"",className:"recipe_pic"},"Image URL:",l.a.createElement("input",{type:"text",name:"recipe_pic",size:"100",value:this.state.recipe_pic,onChange:this.handleInputChange}))),l.a.createElement("div",{className:"nutritionBox"},l.a.createElement("div",{className:"addIngredientsBox"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"",className:"addIngredients"},"Add Ingredients:",l.a.createElement("input",{type:"text",name:"ingredient",size:"40",value:this.state.ingredient,onChange:this.handleInputChange})),l.a.createElement("button",{onClick:this.handleIngredientsClick},"Add:"),l.a.createElement("ul",null,e)))),l.a.createElement("div",{className:"instructionsImageBox"},l.a.createElement("label",{className:"instructionsTitle",htmlFor:" "},"Instructions:",l.a.createElement("div",null,l.a.createElement("textarea",{name:"instructions",value:this.state.instructions,onChange:this.handleInputChange,rows:"12",className:"instructionsBox"}),l.a.createElement("img",{className:"formImage",src:this.state.recipe_pic,alt:""})))))))))}}]),t}(r.Component)),q=Object(v.b)(function(e){return e},n)(H),Y=(a(78),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={first_name:"",last_name:"",email:"",password:"",calories:"",net_carbs:"",fat:"",protein:"",current_weight:"",goal_weight:""},a.register=function(){var e={first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,password:a.state.password,calories:a.state.calories,net_carbs:a.state.net_carbs,fat:a.state.fat,protein:a.state.protein,current_weight:a.state.current_weight,goal_weight:a.state.goal_weight};A.a.post("/api/auth/register",e).then(function(e){var t=e.data;t?(a.props.setUser(t.user),a.props.setWeight(t.weight),a.props.setMacros(t.macros),a.props.history.push("/home")):alert("Invalid Registration"),console.log(t.user,t.macros,t.weight,"user data")})},a.handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(g.a)({},r,n)),console.log("state change",a.state)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"registerPage"},l.a.createElement("div",{className:"colorBlock"}),l.a.createElement("div",{className:"colorBlock2"}),l.a.createElement("div",{className:"headerOutline"},l.a.createElement("h1",{id:"headerReg"},"Friends ",l.a.createElement("i",null,"with")," Food")),l.a.createElement("div",{className:"registerMain"},l.a.createElement("div",null,l.a.createElement("h2",{id:"regTitle"},l.a.createElement("i",null,"Register"))),l.a.createElement("div",{className:"outline1"},l.a.createElement("h2",{className:"userInfoTitle"},"User's Info:"),l.a.createElement("div",{className:"registrationInfo"},l.a.createElement("div",{className:"usersInfo"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"First Name:",l.a.createElement("input",{type:"text",name:"first_name",value:this.state.first_name,onChange:this.handleInputChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Last Name:",l.a.createElement("input",{type:"text",name:"last_name",value:this.state.last_name,onChange:this.handleInputChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Email:",l.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleInputChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Password:",l.a.createElement("input",{type:"text",name:"password",value:this.state.value,onChange:this.handleInputChange})))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h2",null,"User's Macro Goals:"),l.a.createElement("div",{className:"usersMacros"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Calories:",l.a.createElement("input",{type:"text",name:"calories",value:this.state.calories,onChange:this.handleInputChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Net Carbs:",l.a.createElement("input",{type:"text",name:"net_carbs",value:this.state.net_carbs,onChange:this.handleInputChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Fat:",l.a.createElement("input",{type:"text",name:"fat",value:this.state.fat,onChange:this.handleInputChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Protein:",l.a.createElement("input",{type:"text",name:"protein",value:this.state.protein,onChange:this.handleInputChange}))))),l.a.createElement("div",null,l.a.createElement("h2",null,"User's Weight Goals:"),l.a.createElement("div",{className:"usersMacros"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Current Weight:",l.a.createElement("input",{type:"text",name:"current_weight",value:this.state.current_weight,onChange:this.handleInputChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Goal Weight:",l.a.createElement("input",{type:"text",name:"goal_weight",value:this.state.goal_weight,onChange:this.handleInputChange}))))),l.a.createElement("label",{htmlFor:""},l.a.createElement("button",{className:"regButton",onClick:this.register},"Register User"))),l.a.createElement("div",null))))}}]),t}(r.Component)),K=Object(v.b)(function(e){return e},n)(Y),Z=l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:R}),l.a.createElement(d.a,{path:"/goals",component:k}),l.a.createElement(d.a,{path:"/groceryList",component:W}),l.a.createElement(d.a,{path:"/home",component:P}),l.a.createElement(d.a,{path:"/lunchBox",component:D}),l.a.createElement(d.a,{path:"/mealCard/:recipes_id",component:X}),l.a.createElement(d.a,{path:"/planning",component:L}),l.a.createElement(d.a,{path:"/recipeForm",component:q}),l.a.createElement(d.a,{path:"/register",component:K})),$=a(18),ee=Object($.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return t.payload;default:return e}},macros:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setMacros":return t.payload;default:return e}},weight:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setWeight":return t.payload;default:return e}},life:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setLife":return t.payload;default:return e}},recipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setRecipe":return t.payload;default:return e}},ingredients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setIngredients":return t.payload;default:return e}},recipeNutrition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setRecipeNutrition":return t.payload;default:return e}}}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.c,ae=Object($.d)(ee,te()),ne=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(v.a,{store:ae},l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},Z)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.e5fcf6b2.chunk.js.map