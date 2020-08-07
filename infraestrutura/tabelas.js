class Tabelas {
    init(conexao) {
        this.conexao = conexao;
          //console.log('Tabelas foram chamadas')

        this.criarAtendimentos()
    }
      criarAtendimentos(){
        //const sql = 'CREATE TABLE Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

          this.conexao.query(sql, erro => {
              if(erro){
                console.log(erro)
              }else{
                console.log('Tabelas Atendimentos criada com sucesso')
              }
          })

      }
}

module.exports = new Tabelas;