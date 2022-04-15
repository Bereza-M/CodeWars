function sameCase(a, b){
    if (a.charCodeAt()>=65 && b.charCodeAt()>=65 && a.charCodeAt()<=90 && b.charCodeAt()<=90){
      return 1;  
    }
    else if (a.charCodeAt()>=97 && b.charCodeAt()>=97 && a.charCodeAt()<=122 && b.charCodeAt()<=122){
      return 1;  
    }
    else if ((a.charCodeAt()>=65 && a.charCodeAt()<=90) && (b.charCodeAt()>=97 && b.charCodeAt()<=122)){
        return 0;
    }
    else if ((b.charCodeAt()>=65 && b.charCodeAt()<=90) && (a.charCodeAt()>=97 && a.charCodeAt()<=122)){
        return 0;
    }
    
    else {
    return -1;
    }
}