  // Declaring classes 

  /**
   * Represents the root of the site
   */
  class SiteDatabase {
    /**
     * @param {GlobalHeader} globalHeader 
     * @param {SiteMajorSegment[]} database 
     * @param {GlobalHeader} globalAside
     * @param {GlobalFooter} globalFooter
     */
    constructor(globalHeader, database, globalAside, globalFooter) {
      this.globalHeader = globalHeader;
      this.database = database;
      this.globalAside = globalAside;
      this.globalFooter = globalFooter;
    }

    get allSegments() {
      const segments = [];

      for (const segment of this.database) {
        segments.push(segment);
      }

      return segments;
    }
  }

  /**
   * Represents global `<header>` of the site.
   */
  class GlobalHeader {
    constructor(heading, globalNav, globalForms) {
      this.heading = heading;
      this.globalNav = globalNav;
      this.globalForms = globalForms;
    }
  }

  /**
   * Represents global `<aside>` of the site.
   */
  class GlobalAside {}

  /**
   * Represents global `<footer>` of the site.
   */
  class GlobalFooter {}

  /**
   * Represents a major segment of the site.
   */
  class SiteMajorSegment {
    /**
     * @param {string} heading 
     * @param {string} id 
     * @param {SiteSection[]} sections 
     */
    constructor(heading, id, sections) {
      this.heading = heading;
      this.id = id;
      this.sections = sections;
    }

    get allSections() {
      const sections = [];

      for (const section of this.sections) {
        sections.push(section);
      }

      return sections;
    }
  }

  /**
   * Represents site section.
   */
  class SiteSection {
    /**
     * @param {string} heading 
     * @param {string} id 
     * @param {SiteArticle[]} articles 
     */
    constructor(heading, id, articles) {
      this.heading = heading;
      this.id = id;
      this.articles = articles;
    }

    get allArticles() {
      const articles = [];

      for (const article of this.articles) {
        articles.push(article);
      }

      return articles;
    }
  }

  /**
   * Represents site article.
   */
  class SiteArticle {
    /**
     * @param {ArticleHeader} header 
     * @param {string} id
     * @param {(article: HTMLElement) => void | ""} content
     * @param {ArticleAside} aside
     * @param {ArticleFooter} footer
     */
    constructor(header, id, content, aside, footer) {
      this.header = header;
      this.id = id;
      this.content = content;
      this.aside = aside;
      this.footer = footer;
    }
  }

  /**
   * Represents `<header>` of the article.
   */
  class ArticleHeader {
    /**
     * @param {string} heading 
     * @param {LocalNav} localNav 
     */
    constructor(heading, localNav) {
      this.heading = heading;
      this.localNav = localNav;
    };
  }

  /**
   * Represents the local `<nav>`.
   */
  class LocalNav {
    /**
     * @param {NavItem[]} list 
     */
    constructor(list) {
      this.list = list;
    };
  }

  class NavItem {}
  // END Declaring classes