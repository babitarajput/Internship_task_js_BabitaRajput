const recipes = [
    {
      name: "Pancakes",
      ingredients: ["flour", "milk", "egg", "sugar"],
      type: "Breakfast"
    },
    {
      name: "Grilled Chicken",
      ingredients: ["chicken", "salt", "pepper"],
      type: "Lunch"
    },
    {
      name: "Omelette",
      ingredients: ["egg", "cheese", "salt"],
      type: "Breakfast"
    },
    {
      name: "Pasta",
      ingredients: ["pasta", "tomato", "cheese"],
      type: "Dinner"
    }
  ];
  
  function searchRecipes() {
    const input = document.getElementById("ingredientInput").value.toLowerCase();
    const filterType = document.getElementById("typeFilter").value;
    const inputIngredients = input.split(",").map(i => i.trim());
  
    const filteredRecipes = recipes.filter(recipe => {
      const matchType = filterType === "All" || recipe.type === filterType;
      const matchIngredients = inputIngredients.some(ingredient =>
        recipe.ingredients.includes(ingredient)
      );
      return matchType && matchIngredients;
    });
  
    displayRecipes(filteredRecipes);
  }
  
  function displayRecipes(recipes) {
    const container = document.getElementById("recipeList");
    container.innerHTML = "";
  
    if (recipes.length === 0) {
      container.innerHTML = "<p>No matching recipes found.</p>";
      return;
    }
  
    recipes.forEach(recipe => {
      const div = document.createElement("div");
      div.className = "recipe";
      div.innerHTML = `<h3>${recipe.name}</h3>
                       <p><strong>Type:</strong> ${recipe.type}</p>
                       <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>`;
      container.appendChild(div);
    });
  }
  