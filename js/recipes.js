const fetchData = async () => {
  const response = await fetch(`http://localhost:3001/recipes`);
  recipes = await response.json();
  console.log(recipes);
  return recipes;
};

const data = (async () => {
  const data = await fetchData();
  return data;
})();

console.log(data);

const getTemplate = async (item) => {

  return `<div class="recipe-list">
      <div class="recipe-img">
        <a href="detailed_recipe.html">
          <img
            class="recipe-img-item"
            src="${item.photo}"
            alt="${item.photo}"
          />
        </a>
      </div>
      <div class="recipe-content">
        <h3 class="recipe-title">${item.name}</h3>
        <p class="recipe-description">
          ${item.directions}
        </p>
      </div>
    </div>`;
};
