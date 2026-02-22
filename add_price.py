import re
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add price: 150 to each product object
content = re.sub(r'(title: \"[^\"]+\",)', r'\1\n                price: 150,', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
