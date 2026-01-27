#!/usr/bin/env python3
"""
Migrate posts from flexible-jekyll to Minimal Mistakes format
"""
import os
import re
from pathlib import Path

def migrate_post(filepath):
    """Migrate a single post file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Skip if already migrated
    if 'layout: single' in content:
        print(f"✓ Already migrated: {filepath.name}")
        return False
    
    # Replace layout
    content = re.sub(r'layout:\s*post', 'layout: single', content)
    
    # Add Minimal Mistakes required fields if not present
    if '---' in content:
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parts[1]
            
            # Add fields if missing
            additions = []
            if 'author_profile:' not in frontmatter:
                additions.append('author_profile: true')
            if 'read_time:' not in frontmatter:
                additions.append('read_time: true')
            if 'comments:' not in frontmatter:
                additions.append('comments: false')
            if 'share:' not in frontmatter:
                additions.append('share: true')
            if 'related:' not in frontmatter:
                additions.append('related: true')
            
            if additions:
                frontmatter += '\n' + '\n'.join(additions) + '\n'
                content = '---' + frontmatter + '---' + parts[2]
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Migrated: {filepath.name}")
    return True

def main():
    """Main migration function"""
    posts_dir = Path("_posts")
    
    if not posts_dir.exists():
        print("Error: _posts directory not found")
        return
    
    # Get all markdown and html files
    files = list(posts_dir.glob("*.md")) + list(posts_dir.glob("*.html"))
    
    print(f"Found {len(files)} post files")
    print("-" * 50)
    
    migrated_count = 0
    for filepath in files:
        if migrate_post(filepath):
            migrated_count += 1
    
    print("-" * 50)
    print(f"Migration complete!")
    print(f"Migrated: {migrated_count} files")
    print(f"Already migrated: {len(files) - migrated_count} files")

if __name__ == "__main__":
    main()
