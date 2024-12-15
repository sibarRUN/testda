import os
import re

# Define the specific file paths to process
file_paths = [
    "./static/js/main.8be589d2.js",
    "./src/sections/Shop.jsx"
]

# Terms to be removed
terms_to_remove = ["Antiques", "Jewellery", "Watches"]

# Process each file
for file_path in file_paths:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue

    try:
        # Open the file and read its content
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove specified terms
        original_content = content
        for term in terms_to_remove:
            content = re.sub(term, "", content, flags=re.IGNORECASE)

        # Write back to the file if modifications were made
        if original_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Removed terms from: {file_path}")
        else:
            print(f"No terms found in: {file_path}")

    except Exception as e:
        print(f"Error processing file {file_path}: {e}")
