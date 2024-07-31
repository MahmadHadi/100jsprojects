const recipeContainer = document.querySelector(".recipe-container");
const content = [
    {
        img: "https://img.spoonacular.com/recipes/658936-556x370.jpg",
        name: "S'more Bars",
        ingredients:
            "1/2 cup (1 stick) butter, melted, 1 cup sugar, 2 cups graham cracker crumbs, 1 bag milk chocolate chocolate chips minus a handful of chips, 1/2 bag miniature marshmallows",
        link: "https://www.foodista.com/recipe/V6FLBTL2/smore-bars",
    },

    {
        img: "https://img.spoonacular.com/recipes/639749-556x370.jpg",
        name: "Coconut Cream Pie Vegan Milkshake",
        ingredients:
            "1 cup fresh or frozen coconut meat, 1 tablespoon lemon juice, 1 tablespoon coconut oil, 1 cup light coconut milk, 1 ripe frozen banana, 1 teaspoon pure vanilla extract, 2 tablespoons graham cracker crumbs (check label to ensure it is vegan), 1 tablespoon toasted coconut flakes, 1 tablespoon toasted coconut flakes, ice cubes",
        link: "https://www.foodista.com/recipe/LF26X6K8/coconut-cream-pie-vegan-milkshake",
    },

    {
        img: "https://img.spoonacular.com/recipes/633082-556x370.jpg",
        name: "Authentic Mexican Wedding Cookies",
        ingredients:
            "2 sticks butter, room temperature, 2 cups powdered sugar, 2 teaspoons vanilla extract, 2 cups all purpose flour, 1 cup pecans, toasted, coarsely ground, 1/8 teaspoon ground cinnamon",
        link: "https://www.foodista.com/recipe/5GZRBH3M/authentic-mexican-wedding-cookies",
    },

    {
        img: "https://img.spoonacular.com/recipes/661522-556x370.jpg",
        name: "Steak With Blue Cheese Sherry Sauce",
        ingredients:
            "3 tablespoons blue cheese crumbles, 2 tablespoons Olive Oil, plus extra for brushing steaks, 2 teaspoons parsley, finely chopped, 2 tablespoons Sherry (inexpensive cooking Sherry is okay!), 2/3 pound top round",
        link: "https://www.foodista.com/recipe/J8RVH7KB/steak-with-blue-cheese-sherry-sauce",
    },

    {
        img: "https://img.spoonacular.com/recipes/610281-556x370.jpg",
        name: "Ancho Chipotle Chili",
        ingredients:
            "1 dried ancho chile, 5 g vegetable bouillon powder, 1 tsp cumin, 1 dried chipotle chile, fresh cilantro, 400 grams ground beef, 6 large mushrooms, chopped, 6 large mushrooms, chopped, 1 onion, chopped, 2 tsp dried oregano, 1 red bell pepper, chopped, salt and pepper, 500 grams tomato sauce, 500 ml hot water",
        link: "https://spoonacular.com/-1409557476964",
    },

    {
        img: "https://img.spoonacular.com/recipes/637670-556x370.jpg",
        name: "Cheesy Pasta in a Pot",
        ingredients:
            "2 lbs lean ground beef or turkey, 2 onions chopped, 1 garlic clove crushed, 1 14 oz jar spaghetti sauce, 1 lb can stewed tomatoes, 1 can sliced mushrooms, 8 oz shell pasta, 1/2 lb sliced provolone, 1/2 lb sliced mozzarella",
        link: "https://www.foodista.com/recipe/CR2DVH83/cheesy-pasta-in-a-pot",
    },

    {
        img: "https://img.spoonacular.com/recipes/649487-556x370.jpg",
        name: "Lemon - Garlic Chicken",
        ingredients:
            "2 whole chicken breasts, split in half, 1 tablespoon fresh mint or 1 tsp. dried mint, 1 teaspoon Chopped garlic, 1/2 cup fresh lemon juice, 2 tablespoons olive oil, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/8MG4RL8G/lemon-garlic-chicken",
    },

    {
        img: "https://img.spoonacular.com/recipes/716429-556x370.jpg",
        name: "Spaghetti Carbonara",
        ingredients:
            "200g spaghetti, 100g pancetta, 2 large eggs, 50g pecorino cheese, 50g parmesan, 2 plump garlic cloves, peeled and left whole, 50g unsalted butter, Sea salt and freshly ground black pepper to taste",
        link: "https://www.foodista.com/recipe/7FVGHV8J/spaghetti-carbonara",
    },
    {
        img: "https://img.spoonacular.com/recipes/715538-556x370.jpg",
        name: "Vegetarian Tacos",
        ingredients:
            "1 can black beans, drained and rinsed, 1 cup corn kernels, 1 red bell pepper, chopped, 1 avocado, sliced, 1 lime, 1/4 cup chopped cilantro, 1/2 cup salsa, 8 small corn tortillas, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/3H2K87N2/vegetarian-tacos",
    },
    {
        img: "https://img.spoonacular.com/recipes/654835-556x370.jpg",
        name: "Chocolate Chip Cookies",
        ingredients:
            "2 1/4 cups all-purpose flour, 1/2 teaspoon baking soda, 1 cup unsalted butter, 1/2 cup granulated sugar, 1 cup packed brown sugar, 1 teaspoon salt, 2 teaspoons pure vanilla extract, 2 large eggs, 2 cups semisweet and/or milk chocolate chips",
        link: "https://www.foodista.com/recipe/4J2L7R8D/chocolate-chip-cookies",
    },
    {
        img: "https://img.spoonacular.com/recipes/715447-556x370.jpg",
        name: "Caesar Salad",
        ingredients:
            "1 large head romaine lettuce, 1/3 cup grated Parmesan cheese, 1 cup croutons, 1 clove garlic, minced, 1/2 cup mayonnaise, 1 tablespoon lemon juice, 1 teaspoon Worcestershire sauce, 1/4 teaspoon salt, 1/4 teaspoon freshly ground black pepper",
        link: "https://www.foodista.com/recipe/6G3H5T6A/caesar-salad",
    },
    {
        img: "https://img.spoonacular.com/recipes/715594-556x370.jpg",
        name: "Beef Stroganoff",
        ingredients:
            "1 pound beef sirloin, cut into strips, 1/2 cup chopped onion, 1 clove garlic, minced, 1/4 cup butter, 1 can condensed cream of mushroom soup, 1/2 cup sour cream, 1 tablespoon Worcestershire sauce, 1/4 cup white wine, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/9D5R8T7B/beef-stroganoff",
    },

    {
        img: "https://img.spoonacular.com/recipes/716268-556x370.jpg",
        name: "Classic Beef Burger",
        ingredients:
            "1 pound ground beef, 1 egg, 1/4 cup bread crumbs, 1/4 cup minced onion, 1 tablespoon Worcestershire sauce, Salt and pepper to taste, 4 hamburger buns, Lettuce, tomato, onion, and condiments as desired",
        link: "https://www.foodista.com/recipe/4K2L8M8G/classic-beef-burger",
    },
    {
        img: "https://img.spoonacular.com/recipes/715769-556x370.jpg",
        name: "Chicken Alfredo",
        ingredients:
            "2 boneless chicken breasts, 1/4 cup butter, 1 cup heavy cream, 1 cup grated Parmesan cheese, 1 clove garlic, minced, 8 ounces fettuccine, Salt and pepper to taste, Chopped parsley for garnish",
        link: "https://www.foodista.com/recipe/7H2J9R7B/chicken-alfredo",
    },
    {
        img: "https://img.spoonacular.com/recipes/715421-556x370.jpg",
        name: "Grilled Cheese Sandwich",
        ingredients:
            "4 slices bread, 2 tablespoons butter, softened, 2 slices cheddar cheese, 2 slices American cheese, 1 tomato, sliced (optional)",
        link: "https://www.foodista.com/recipe/3H3J6K8P/grilled-cheese-sandwich",
    },
    {
        img: "https://img.spoonacular.com/recipes/716342-556x370.jpg",
        name: "Vegetable Stir Fry",
        ingredients:
            "2 cups broccoli florets, 1 red bell pepper, sliced, 1 yellow bell pepper, sliced, 1 carrot, julienned, 1/2 cup snow peas, 1 clove garlic, minced, 1 tablespoon soy sauce, 1 tablespoon hoisin sauce, 1 tablespoon olive oil",
        link: "https://www.foodista.com/recipe/5G4J9M7L/vegetable-stir-fry",
    },
    {
        img: "https://img.spoonacular.com/recipes/716311-556x370.jpg",
        name: "Banana Bread",
        ingredients:
            "2 cups all-purpose flour, 1 teaspoon baking soda, 1/4 teaspoon salt, 1/2 cup butter, 3/4 cup brown sugar, 2 large eggs, beaten, 2 1/3 cups mashed overripe bananas",
        link: "https://www.foodista.com/recipe/6H5J2M8L/banana-bread",
    },
    {
        img: "https://img.spoonacular.com/recipes/715594-556x370.jpg",
        name: "Beef Tacos",
        ingredients:
            "1 pound ground beef, 1 packet taco seasoning, 8 taco shells, 1 cup shredded lettuce, 1 cup shredded cheese, 1 tomato, diced, 1/4 cup sour cream, Salsa as desired",
        link: "https://www.foodista.com/recipe/5J2M8N8G/beef-tacos",
    },
    {
        img: "https://img.spoonacular.com/recipes/716195-556x370.jpg",
        name: "Margarita Pizza",
        ingredients:
            "1 pizza dough, 1/2 cup tomato sauce, 1 cup shredded mozzarella cheese, 1/4 cup fresh basil leaves, 2 tablespoons olive oil, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/8K2L9P7B/margarita-pizza",
    },
    {
        img: "https://img.spoonacular.com/recipes/715432-556x370.jpg",
        name: "Chicken Caesar Wrap",
        ingredients:
            "2 cups cooked, shredded chicken, 1/2 cup Caesar dressing, 1/4 cup grated Parmesan cheese, 2 cups chopped romaine lettuce, 4 large flour tortillas, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/3J4K8M9G/chicken-caesar-wrap",
    },
    {
        img: "https://img.spoonacular.com/recipes/715495-556x370.jpg",
        name: "Greek Salad",
        ingredients:
            "3 cups chopped romaine lettuce, 1 cucumber, sliced, 1 red onion, thinly sliced, 1/2 cup Kalamata olives, 1/2 cup crumbled feta cheese, 1/4 cup olive oil, 1 tablespoon red wine vinegar, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/4H5J3N8B/greek-salad",
    },
    {
        img: "https://img.spoonacular.com/recipes/715497-556x370.jpg",
        name: "Tomato Soup",
        ingredients:
            "1 tablespoon olive oil, 1 onion, chopped, 2 cloves garlic, minced, 2 cans diced tomatoes, 2 cups chicken broth, 1/2 cup heavy cream, Salt and pepper to taste, Basil leaves for garnish",
        link: "https://www.foodista.com/recipe/6J3K9M7G/tomato-soup",
    },
    {
        img: "https://img.spoonacular.com/recipes/716429-556x370.jpg",
        name: "Mushroom Risotto",
        ingredients:
            "2 tablespoons olive oil, 1 onion, chopped, 2 cloves garlic, minced, 1 1/2 cups Arborio rice, 1/2 cup white wine, 4 cups chicken broth, 1 cup mushrooms, sliced, 1/2 cup grated Parmesan cheese, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/7J6K2N9L/mushroom-risotto",
    },
    {
        img: "https://img.spoonacular.com/recipes/716415-556x370.jpg",
        name: "Apple Pie",
        ingredients:
            "1 recipe pastry for a 9-inch double crust pie, 1/2 cup unsalted butter, 3 tablespoons all-purpose flour, 1/4 cup water, 1/2 cup white sugar, 1/2 cup packed brown sugar, 8 Granny Smith apples, peeled, cored and sliced",
        link: "https://www.foodista.com/recipe/8K4J9M8B/apple-pie",
    },
    {
        img: "https://img.spoonacular.com/recipes/715497-556x370.jpg",
        name: "Avocado Toast",
        ingredients:
            "2 slices whole grain bread, toasted, 1 avocado, mashed, 1/2 teaspoon lemon juice, Salt and pepper to taste, Red pepper flakes for garnish",
        link: "https://www.foodista.com/recipe/5H6J3N8L/avocado-toast",
    },
    {
        img: "https://img.spoonacular.com/recipes/716409-556x370.jpg",
        name: "BBQ Ribs",
        ingredients:
            "2 racks pork baby back ribs, 1/4 cup brown sugar, 1/4 cup chili powder, 2 teaspoons garlic powder, 2 teaspoons onion powder, 1 teaspoon black pepper, 1 teaspoon salt, 1 teaspoon cayenne pepper, 1 cup BBQ sauce",
        link: "https://www.foodista.com/recipe/9J5K8M8G/bbq-ribs",
    },
    {
        img: "https://img.spoonacular.com/recipes/715446-556x370.jpg",
        name: "Caprese Salad",
        ingredients:
            "4 large tomatoes, sliced, 1 pound fresh mozzarella cheese, sliced, 1/4 cup fresh basil leaves, 2 tablespoons balsamic vinegar, 2 tablespoons olive oil, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/3K5J7N9G/caprese-salad",
    },
    {
        img: "https://img.spoonacular.com/recipes/716192-556x370.jpg",
        name: "Chocolate Cake",
        ingredients:
            "1 3/4 cups all-purpose flour, 1 1/2 teaspoons baking powder, 1 1/2 teaspoons baking soda, 3/4 cup cocoa powder, 2 cups sugar, 2 large eggs, 1 cup milk, 1/2 cup vegetable oil, 2 teaspoons vanilla extract, 1 cup boiling water",
        link: "https://www.foodista.com/recipe/7K4J8M9L/chocolate-cake",
    },
    {
        img: "https://img.spoonacular.com/recipes/716426-556x370.jpg",
        name: "Lemon Bars",
        ingredients:
            "1 cup butter, softened, 2 cups all-purpose flour, 1/2 cup powdered sugar, 4 large eggs, 2 cups granulated sugar, 1/3 cup all-purpose flour, 2 teaspoons grated lemon zest, 1/3 cup lemon juice",
        link: "https://www.foodista.com/recipe/6K5J3N7G/lemon-bars",
    },
    {
        img: "https://img.spoonacular.com/recipes/715769-556x370.jpg",
        name: "Fish Tacos",
        ingredients:
            "1 pound white fish fillets, 1 tablespoon olive oil, 1 teaspoon chili powder, 1 teaspoon cumin, 1 teaspoon garlic powder, Salt and pepper to taste, 8 small tortillas, 1 cup shredded cabbage, 1/4 cup chopped cilantro, 1 lime, cut into wedges",
        link: "https://www.foodista.com/recipe/8K6J3M8B/fish-tacos",
    },
    {
        img: "https://img.spoonacular.com/recipes/715540-556x370.jpg",
        name: "Blueberry Muffins",
        ingredients:
            "1 1/2 cups all-purpose flour, 3/4 cup sugar, 1/2 teaspoon salt, 2 teaspoons baking powder, 1/3 cup vegetable oil, 1 egg, 1/3 cup milk, 1 cup fresh blueberries",
        link: "https://www.foodista.com/recipe/5K7J4N8L/blueberry-muffins",
    },
    {
        img: "https://img.spoonacular.com/recipes/716627-556x370.jpg",
        name: "Stuffed Bell Peppers",
        ingredients:
            "4 bell peppers, tops cut off and seeds removed, 1 pound ground beef, 1 cup cooked rice, 1/2 cup onion, chopped, 1 can diced tomatoes, 1/2 cup shredded cheese, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/9K5J8M7G/stuffed-bell-peppers",
    },
    {
        img: "https://img.spoonacular.com/recipes/715586-556x370.jpg",
        name: "French Toast",
        ingredients:
            "4 slices bread, 2 large eggs, 1/2 cup milk, 1 teaspoon vanilla extract, 1 teaspoon cinnamon, 1 tablespoon butter, Maple syrup and powdered sugar for serving",
        link: "https://www.foodista.com/recipe/6K4J7N8L/french-toast",
    },
    {
        img: "https://img.spoonacular.com/recipes/715562-556x370.jpg",
        name: "Shrimp Scampi",
        ingredients:
            "1 pound large shrimp, peeled and deveined, 3 tablespoons butter, 4 cloves garlic, minced, 1/4 cup white wine, 1/4 cup chicken broth, 1 lemon, juiced, 2 tablespoons parsley, chopped, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/4K3J9M9G/shrimp-scampi",
    },
    {
        img: "https://img.spoonacular.com/recipes/715564-556x370.jpg",
        name: "Vegetable Soup",
        ingredients:
            "2 tablespoons olive oil, 1 onion, chopped, 2 carrots, sliced, 2 celery stalks, sliced, 2 potatoes, diced, 1 can diced tomatoes, 4 cups vegetable broth, 1 teaspoon thyme, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/3K5J8M7B/vegetable-soup",
    },
    {
        img: "https://img.spoonacular.com/recipes/715580-556x370.jpg",
        name: "Eggplant Parmesan",
        ingredients:
            "2 large eggplants, sliced, 1 cup all-purpose flour, 2 large eggs, beaten, 2 cups bread crumbs, 1 cup grated Parmesan cheese, 2 cups marinara sauce, 2 cups shredded mozzarella cheese, Fresh basil for garnish",
        link: "https://www.foodista.com/recipe/7K8J4M8L/eggplant-parmesan",
    },
    {
        img: "https://img.spoonacular.com/recipes/715573-556x370.jpg",
        name: "Garlic Bread",
        ingredients:
            "1 loaf French bread, 1/2 cup butter, softened, 3 cloves garlic, minced, 1/4 cup chopped parsley, 1/4 teaspoon salt",
        link: "https://www.foodista.com/recipe/4K8J3N9G/garlic-bread",
    },
    {
        img: "https://img.spoonacular.com/recipes/715579-556x370.jpg",
        name: "Beef Stew",
        ingredients:
            "2 pounds beef chuck, cut into cubes, 2 tablespoons vegetable oil, 1 onion, chopped, 2 carrots, sliced, 2 potatoes, diced, 3 cups beef broth, 1 tablespoon tomato paste, 1 teaspoon thyme, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/9K7J3M7B/beef-stew",
    },
    {
        img: "https://img.spoonacular.com/recipes/715591-556x370.jpg",
        name: "Cinnamon Rolls",
        ingredients:
            "2 1/4 teaspoons active dry yeast, 1 cup warm milk, 1/2 cup granulated sugar, 1/3 cup butter, melted, 1 teaspoon salt, 2 large eggs, 4 cups all-purpose flour, 1 cup brown sugar, 2 1/2 tablespoons ground cinnamon, 1/3 cup butter, softened",
        link: "https://www.foodista.com/recipe/3K6J4M8G/cinnamon-rolls",
    },
    {
        img: "https://img.spoonacular.com/recipes/715467-556x370.jpg",
        name: "Spinach and Feta Stuffed Chicken",
        ingredients:
            "4 boneless chicken breasts, 1 cup spinach, chopped, 1/2 cup feta cheese, crumbled, 2 cloves garlic, minced, 2 tablespoons olive oil, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/8K4J8N9L/spinach-and-feta-stuffed-chicken",
    },
    {
        img: "https://img.spoonacular.com/recipes/715508-556x370.jpg",
        name: "Pumpkin Pie",
        ingredients:
            "1 pie crust, 1 can pumpkin puree, 1 cup heavy cream, 1/2 cup brown sugar, 1/2 cup granulated sugar, 2 large eggs, 1 teaspoon ground cinnamon, 1/2 teaspoon ground ginger, 1/4 teaspoon ground cloves, 1/4 teaspoon salt",
        link: "https://www.foodista.com/recipe/5K9J4M7G/pumpkin-pie",
    },
    {
        img: "https://img.spoonacular.com/recipes/715529-556x370.jpg",
        name: "Beef and Broccoli",
        ingredients:
            "1 pound beef flank steak, sliced, 2 cups broccoli florets, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon hoisin sauce, 1 clove garlic, minced, 1 tablespoon cornstarch, 1/2 cup beef broth, 2 tablespoons vegetable oil",
        link: "https://www.foodista.com/recipe/7K8J3M9B/beef-and-broccoli",
    },
    {
        img: "https://img.spoonacular.com/recipes/715546-556x370.jpg",
        name: "Pancakes",
        ingredients:
            "1 1/2 cups all-purpose flour, 3 1/2 teaspoons baking powder, 1 teaspoon salt, 1 tablespoon sugar, 1 1/4 cups milk, 1 egg, 3 tablespoons butter, melted",
        link: "https://www.foodista.com/recipe/3K6J8N7G/pancakes",
    },
    {
        img: "https://img.spoonacular.com/recipes/715451-556x370.jpg",
        name: "Lasagna",
        ingredients:
            "1 pound ground beef, 1 onion, chopped, 2 cloves garlic, minced, 1 can tomato sauce, 1 can crushed tomatoes, 2 cans tomato paste, 2 tablespoons sugar, 1 teaspoon dried basil, 1/2 teaspoon fennel seeds, 1 teaspoon Italian seasoning, 1 tablespoon salt, 1/4 teaspoon ground black pepper, 12 lasagna noodles, 16 ounces ricotta cheese, 1 egg, 3/4 cup grated Parmesan cheese, 1 pound mozzarella cheese, sliced",
        link: "https://www.foodista.com/recipe/5K4J9M8L/lasagna",
    },
    {
        img: "https://img.spoonacular.com/recipes/715529-556x370.jpg",
        name: "Chicken Enchiladas",
        ingredients:
            "1 pound cooked, shredded chicken, 1 cup salsa, 1/2 cup sour cream, 1 cup shredded cheese, 8 large tortillas, 1 can enchilada sauce, 1/4 cup chopped cilantro",
        link: "https://www.foodista.com/recipe/7K4J6N9B/chicken-enchiladas",
    },
    {
        img: "https://img.spoonacular.com/recipes/715521-556x370.jpg",
        name: "Tuna Salad",
        ingredients:
            "2 cans tuna, drained, 1/4 cup mayonnaise, 1 tablespoon lemon juice, 1/4 cup chopped celery, 1/4 cup chopped red onion, Salt and pepper to taste, Lettuce leaves for serving",
        link: "https://www.foodista.com/recipe/6K5J3M8G/tuna-salad",
    },
    {
        img: "https://img.spoonacular.com/recipes/715418-556x370.jpg",
        name: "Vegetable Curry",
        ingredients:
            "2 tablespoons vegetable oil, 1 onion, chopped, 2 cloves garlic, minced, 1 tablespoon curry powder, 1 teaspoon ground cumin, 1 teaspoon ground coriander, 1/2 teaspoon turmeric, 1/2 teaspoon ground ginger, 1 can coconut milk, 2 cups mixed vegetables, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/3K8J7N9L/vegetable-curry",
    },
    {
        img: "https://img.spoonacular.com/recipes/715457-556x370.jpg",
        name: "Clam Chowder",
        ingredients:
            "4 slices bacon, chopped, 1 onion, chopped, 2 stalks celery, chopped, 2 cans chopped clams, 3 cups clam juice, 2 cups diced potatoes, 1 cup heavy cream, 1/4 cup all-purpose flour, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/8K9J4M7G/clam-chowder",
    },
    {
        img: "https://img.spoonacular.com/recipes/715503-556x370.jpg",
        name: "Quiche Lorraine",
        ingredients:
            "1 pie crust, 6 slices bacon, cooked and crumbled, 1 cup shredded Swiss cheese, 1/4 cup chopped onion, 4 large eggs, beaten, 1 1/2 cups half-and-half, 1/4 teaspoon salt, 1/4 teaspoon ground white pepper",
        link: "https://www.foodista.com/recipe/4K6J3N8L/quiche-lorraine",
    },
    {
        img: "https://img.spoonacular.com/recipes/715522-556x370.jpg",
        name: "Lemon Chicken",
        ingredients:
            "4 boneless chicken breasts, 1/4 cup all-purpose flour, 2 tablespoons olive oil, 1/4 cup lemon juice, 1/4 cup chicken broth, 1/4 cup white wine, 2 cloves garlic, minced, 1 tablespoon capers, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/6K4J9M7G/lemon-chicken",
    },
    {
        img: "https://img.spoonacular.com/recipes/715466-556x370.jpg",
        name: "Minestrone Soup",
        ingredients:
            "2 tablespoons olive oil, 1 onion, chopped, 2 cloves garlic, minced, 2 carrots, sliced, 2 stalks celery, chopped, 1 zucchini, chopped, 1 can diced tomatoes, 4 cups vegetable broth, 1 cup pasta, 1 can kidney beans, 1 teaspoon dried oregano, 1 teaspoon dried basil, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/9K5J8N7B/minestrone-soup",
    },
    {
        img: "https://img.spoonacular.com/recipes/715540-556x370.jpg",
        name: "Fried Rice",
        ingredients:
            "2 cups cooked rice, 1 cup mixed vegetables, 2 eggs, beaten, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 clove garlic, minced, 2 tablespoons vegetable oil, 2 green onions, chopped",
        link: "https://www.foodista.com/recipe/3K7J9M9L/fried-rice",
    },
    {
        img: "https://img.spoonacular.com/recipes/715499-556x370.jpg",
        name: "Chocolate Brownies",
        ingredients:
            "1/2 cup butter, melted, 1 cup sugar, 1 teaspoon vanilla extract, 2 large eggs, 1/3 cup unsweetened cocoa powder, 1/2 cup all-purpose flour, 1/4 teaspoon salt, 1/4 teaspoon baking powder",
        link: "https://www.foodista.com/recipe/8K6J3M9G/chocolate-brownies",
    },
    {
        img: "https://img.spoonacular.com/recipes/715467-556x370.jpg",
        name: "Chicken Noodle Soup",
        ingredients:
            "1 tablespoon olive oil, 1 onion, chopped, 2 carrots, sliced, 2 stalks celery, chopped, 2 cloves garlic, minced, 8 cups chicken broth, 1 teaspoon dried thyme, 1 teaspoon dried basil, Salt and pepper to taste, 2 cups shredded cooked chicken, 2 cups egg noodles",
        link: "https://www.foodista.com/recipe/5K9J4M8B/chicken-noodle-soup",
    },
    {
        img: "https://img.spoonacular.com/recipes/715568-556x370.jpg",
        name: "Pasta Primavera",
        ingredients:
            "8 ounces pasta, 1 tablespoon olive oil, 1 clove garlic, minced, 1 cup cherry tomatoes, halved, 1 cup asparagus, cut into pieces, 1 cup bell pepper, sliced, 1/4 cup grated Parmesan cheese, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/6K8J3N9L/pasta-primavera",
    },
    {
        img: "https://img.spoonacular.com/recipes/715459-556x370.jpg",
        name: "Garlic Shrimp",
        ingredients:
            "1 pound large shrimp, peeled and deveined, 2 tablespoons butter, 2 tablespoons olive oil, 4 cloves garlic, minced, 1/4 cup white wine, 1 lemon, juiced, 2 tablespoons parsley, chopped, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/4K9J3M7G/garlic-shrimp",
    },
    {
        img: "https://img.spoonacular.com/recipes/715522-556x370.jpg",
        name: "Peach Cobbler",
        ingredients:
            "1/2 cup butter, melted, 1 cup all-purpose flour, 1 cup sugar, 1 tablespoon baking powder, 1/4 teaspoon salt, 1 cup milk, 4 cups sliced fresh peaches, 1 tablespoon lemon juice, 1/4 teaspoon ground cinnamon",
        link: "https://www.foodista.com/recipe/3K6J8M7B/peach-cobbler",
    },
    {
        img: "https://img.spoonacular.com/recipes/715543-556x370.jpg",
        name: "Baked Salmon",
        ingredients:
            "4 salmon fillets, 1/4 cup olive oil, 1 lemon, juiced, 2 cloves garlic, minced, 1 tablespoon fresh dill, chopped, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/8K4J9N7L/baked-salmon",
    },
    {
        img: "https://img.spoonacular.com/recipes/715419-556x370.jpg",
        name: "Broccoli Cheddar Soup",
        ingredients:
            "4 tablespoons butter, 1 onion, chopped, 1/4 cup all-purpose flour, 2 cups half-and-half, 4 cups chicken broth, 1/2 pound broccoli florets, 1 cup matchstick-cut carrots, 2 cups shredded cheddar cheese, Salt and pepper to taste",
        link: "https://www.foodista.com/recipe/6K5J3M8L/broccoli-cheddar-soup",
    },
];

// console.log(content.length);

function generateRandomNumbers(min, max, count) {
    let randomNumbers = [];
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

let randomNumbers = generateRandomNumbers(0, 58, 10);
// console.log(randomNumbers);

function main() {
    recipeContainer.innerHTML = "";
    randomNumbers.forEach((elem) => {
        let currObj = content[elem];
        recipeContainer.innerHTML += `<div class="recipe">
        <div class="left">
            <div class="img">
                <img src="${currObj.img}" alt="recipe1">
            </div>
            <h1 class="name">${currObj.name}</h1>
        </div>
        <div class="right">
            <p class="ingredients">
                <span>Ingredients: </span>
                ${currObj.ingredients}
            </p>
            <a class="link" href="${currObj.link}">VIEW RECIPE</a>
        </div>
    </div>`;
    });
}
main();

temp = `<div class="recipe">
                <div class="left">
                    <div class="img">
                        <img src="https://img.spoonacular.com/recipes/632208-556x370.jpg" alt="recipe1">
                    </div>
                    <h1 class="name">Almost Heaven Cake</h1>
                </div>
                <div class="right">
                    <p class="ingredients">
                        <span>Ingredients: </span>
                        3 Eggs, 1 cup all-purpose flour, 2 lemons, 1 cup milk, confectioner's sugar, 2 tablespoons Unsalted Organic Butter
                    </p>
                    <a class="link" href="#">VIEW RECIPE</a>
                </div>
            </div>`;
