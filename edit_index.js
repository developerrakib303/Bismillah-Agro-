const fs = require('fs');
let text = fs.readFileSync('index.html', 'utf-8');

// 1. Modal HTML
text = text.replace(
    '<h3 id="modalTitle" class="text-3xl font-bold text-gray-800 mb-4"></h3>\r\n                <div class="h-1 w-20 bg-green-500 rounded mb-6"></div>',
    '<h3 id="modalTitle" class="text-3xl font-bold text-gray-800 mb-2"></h3>\r\n                <p id="modalPrice" class="text-2xl font-bold text-green-600 mb-4"></p>\r\n                <div class="h-1 w-20 bg-green-500 rounded mb-6"></div>'
);
text = text.replace(
    '<h3 id="modalTitle" class="text-3xl font-bold text-gray-800 mb-4"></h3>\n                <div class="h-1 w-20 bg-green-500 rounded mb-6"></div>',
    '<h3 id="modalTitle" class="text-3xl font-bold text-gray-800 mb-2"></h3>\n                <p id="modalPrice" class="text-2xl font-bold text-green-600 mb-4"></p>\n                <div class="h-1 w-20 bg-green-500 rounded mb-6"></div>'
);


// 2. Card HTML
text = text.replace(
    '<div class="flex justify-between items-start mb-2">\r\n                             <h3 class="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">${product.title}</h3>\r\n                        </div>',
    '<div class="flex justify-between items-start mb-2">\r\n                             <h3 class="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">${product.title}</h3>\r\n                        </div>\r\n                        <p class="text-lg font-bold text-green-600 mb-2">৳${product.price}</p>'
);
text = text.replace(
    '<div class="flex justify-between items-start mb-2">\n                             <h3 class="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">${product.title}</h3>\n                        </div>',
    '<div class="flex justify-between items-start mb-2">\n                             <h3 class="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">${product.title}</h3>\n                        </div>\n                        <p class="text-lg font-bold text-green-600 mb-2">৳${product.price}</p>'
);


// 3. openModal JS
text = text.replace(
    "document.getElementById('modalTitle').innerText = product.title;\r\n            document.getElementById('modalDesc').innerText = product.desc;\r\n            document.getElementById('modalImage').src = product.img;",
    "document.getElementById('modalTitle').innerText = product.title;\r\n            document.getElementById('modalPrice').innerText = `৳${product.price}`;\r\n            document.getElementById('modalDesc').innerText = product.desc;\r\n            document.getElementById('modalImage').src = product.img;"
);
text = text.replace(
    "document.getElementById('modalTitle').innerText = product.title;\n            document.getElementById('modalDesc').innerText = product.desc;\n            document.getElementById('modalImage').src = product.img;",
    "document.getElementById('modalTitle').innerText = product.title;\n            document.getElementById('modalPrice').innerText = `৳${product.price}`;\n            document.getElementById('modalDesc').innerText = product.desc;\n            document.getElementById('modalImage').src = product.img;"
);


fs.writeFileSync('index.html', text);
console.log('Done!');
