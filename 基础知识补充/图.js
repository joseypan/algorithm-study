图
  1、图的相关术语
    图是网络结构的抽象模型。图是一组由边连接的节点（或顶点）。
    任何社交网络，例如Facebook,Twitter和Google+，都可以用图来表示
    可以使用图来表示道路、航班以及通信
    一个图G=(V,E)由以下元素组成
    V:一组顶点
    E:一组边，连接V中的顶点
    相关术语：
      1.1 由一条边连接在一起的顶点称为相邻顶点
      1.2 一个顶点的度是其相邻顶点的数量
      1.3 路径是顶点v1,v2,...,vk的一个连续序列，其中vi和vi+1是相邻的
      1.4 简单路径要求不包含重复的顶点。
      1.5 如果途中不存在环,则称该图是无环的。如果图中每两个顶点间都存在路径,则该图是连通的
      有向图和无向图
        图可以是无向的（边没有方向）或是有向的（有向图）
        如果图中每两个顶点间在双向上都存在路径，则该图是强连通的。
        图还可以是未加权的（目前为止我们看到的图都是未加权的）或是加权的。
  2、图的三种不同表示
    从数据结构的角度来说，我们有多种方式来表示图。在所有的表示法中，不存在绝对正确的方式。图的正确表示法取决于待解决的问题和图的类型
    2.1 邻接矩阵
      图最常见的实现是邻接矩阵。每个节点都和一个整数相关联，该整数将作为数组的索引。我们用一个二维数组来表示顶点之间的连接。如果索引为i的节点和索引为j的节点相邻，则array[i][j]===1,否则array[i][j]===0
      不是强连接的图（稀疏图）如果用邻接矩阵来表示，则矩阵中将会有很多0，这意味着我们浪费了计算机存储空间来表示根本不存在的边。
      例如，找给定顶点的相邻顶点，即使该顶点只有一个相邻顶点，我们也不得不迭代一整行。邻接矩阵表示法不够好的另一个理由是，图中顶点的数量可能会改变，而二维数组不太灵活
    2.2 邻接表
      可以使用邻接表的动态数据结构来表示图。邻接表由图中每个顶点的相邻列表所组成。存在好几种方式来表示这种数据结构。我们可以用列表（数组）、链表、甚至是散列表或是字典来表示相邻顶点列表
      尽管邻接表可能对大多数问题来说都是更好的选择，但以上两种表示法都很有用，且它们有着不同的性质（例如，要找出顶点v和w是否相邻，使用邻接矩阵会比较快）
    2.3 关联矩阵
      关联矩阵中，矩阵的行表示顶点，列表示边
      使用二维数组来表示两者之间的连通性，如果顶点v是边e的入射点，则array[v][e] === 1,否则array[v][e]===0
  3、图数据结构
    创建Graph类
    class Graph{
      constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary()//查看书第8章
      }
    }
    Graph构造函数可以接收一个参数来表示图是否有向，默认情况下，图是无向的。我们使用一个数组来存储图中所有顶点的名字，以及一个字典来存储邻接表。字典将会使用顶点的名字作为键，邻接顶点列表作为值
    向图中添加新的顶点
    class Graph{
      constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary()
      }
      addVertex(v){
        if(!this.vertices.includes(v)){
          this.vertices.push(v);
          this.adjList.set(v,[])
        }
      }
    }
    添加顶点之间的边
    class Graph{
      constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary()
      }
      addVertex(v){
        if(!this.vertices.includes(v)){
          this.vertices.push(v);
          this.adjList.set(v,[])
        }
      }
      addEdge(v,w){
        if(!this.adjList.get(v)){
          this.addVertex(v)
        }
        if(!this.adjList.get(w)){
          this.addVertex(w);
        }
        this.adjList.get(v).push(w)
        if(!this.isDirected){
          this.adjList.get(w).push(v)
        }
      }
    }
  4、图的搜索算法
  5、最短路径算法
  6、最小生成树算法
