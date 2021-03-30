import { graphql, Link } from "gatsby"
import React from "react"
import ListLink from "../components/ListLink"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  return (
    <Layout>
    <SiteMetadata description="Exposição digital das obras de Luis Jardim" />

    <div className="bg-gray-100">
      <div className="w-screen bg-red-700 hero-about"></div>
        <div className="w-full">
          <div className="p-4">
            <div className="grid gap-4 grid-flow-row md:grid-cols-5 sm:grid-cols-2">
            <ListLink label="Jornal A Provincia" to="/jornal-a-provincia" />
            <ListLink label="Revista de Garanhuns" to="/revista-garanhuns" />
            <ListLink label="Revista Moderna" to="/revista-moderna" />
            <ListLink label="Acção Pernambucana" to="/accao-pernambucana" />
            <ListLink label="Guia do Recife" to="/guia-do-recife" />
            <ListLink label="Annuario de Pernambuco 1936" to="/annuario-de-pernambuco-1936" />
            <ListLink label="Diario de Pernambuco" to="/diario-de-pernambuco" />
            <ListLink label="Jornal do Commercio" to="/jornal-do-commercio" />
            <ListLink label="Brasil Açucareiro" to="/brasil-acucareiro" />
            <ListLink label="Rio de Janeiro" to="/rio-de-janeiro" />
            </div>
          </div>
        </div>
      <div className="container py-20 lg:pb-16">
        <div className="flex flex-wrap justify-center">
          
          <div className="w-full md:w-1/2 xl:w-4/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sobre Luís Jardim
            </h1>
            <div className="mt-12 leading-loose">
            <strong>O Design de Luís Jardim: Ilustrações e Artes Gráficas para a Imprensa Periódica Pernambucana do começo do Século XX </strong>é o título da dissertação de mestrado do designer e pesquisador Bruno Verissimo. Realizada entre 2018 e 2020 no no Programa de Pós-Graduação em Design da Universidade Federal de Pernambuco, o projeto teve como objetivo criar um panorama das obras do artista Luís Jardim, com foco em seus primeiros trabalhos para a indústria gráfica pernambucana nas décadas de 1920 e 1930, situando-o dentro dos estudos de Memória Gráfica. Para isso, foi realizado visitas aos acervos recifenses e análise do material coletado, entendendo a produção do artista gráfico como o designer da época.<br /><br />

            <strong>Luís Inácio de Miranda Jardim </strong>nasceu em Garanhuns, interior de Pernambuco, em 1901. Foi autodidata, tendo nunca frequentado escola de arte ou pintura. No Recife, Jardim se mostrou um cultor do bico de pena e das artes gráficas, possuindo uma técnica e experiência incríveis para sua pouca formação. <br /><br />

            Seu talento lhe renderam parcerias com <strong>Manoel Bandeira</strong> (o artista gráfico) e <strong>Gilberto Freyre</strong>, com quem colaborou no Guia Prático, Histórico e Sentimental da Cidade do Recife, publicado em 1934. Além de ter atuado intimamente nas oficinas de produção das principais publicações periódicas da época: Revista do Norte, A Província, Diário de Pernambuco e Jornal do Commercio.<br /><br />

            A sua ocupação mais tarde como escritor de diversas obras o fizeram popular no meio da literatura, quando se muda para o Rio de Janeiro vence o <strong>Prêmio Humberto de Campos</strong> e conquista o primeiro lugar no <strong>Concurso de Literatura Infantil do Ministério da Educação e Cultura</strong> em 1937. Já o seu trabalho como capista e ilustrador de livros na <strong>Editora José Olympio</strong> o colocaram no patamar de artistas como <strong>Santa Rosa e Cícero Dias</strong>, ocupando mais tarde cargo de importância nos bastidores das publicações da editora. <br /><br />

            Trabalhou no <strong>Instituto do Açúcar e do Álcool</strong>, ajudou a fundar o Museu do Açúcar no Recife e a revista Brasil Açucareiro, onde participou ativamente nas ilustrações do miolo e capa do impresso. Auxiliou Mário de Andrade na elaboração do anteprojeto de lei que deu origem ao <strong>Serviço de Patrimônio Histórico e Artístico Nacional</strong> (hoje IPHAN).<br /><br />

            Faleceu em 1987 aos 87 anos no Rio de Janeiro, deixando um legado nas artes, na literatura e agora resgatado do ponto de vista do design gráfico.
            </div>
            <Img
              fluid={data.linhaTempo.childImageSharp.fluid}
              alt="John Doe"
              className="my-12"
            />
            <div className="mt-12 leading-loose">
              Este site em formato de galeria é o resultado da pesquisa de mestrado, mas também uma forma de difundir o trabalho de Luís Jardim para mais pessoas, já que acreditamos que o resgate da cultura material reinserido no presente e reconhecido por seus indivíduos, a quem ela pertence, pode contribuir na compreensão de suas identidades, as quais estão em constante processo de transformação.
              <a className="font-bold pt-6 underline block" href="https://attena.ufpe.br/handle/123456789/39235">Leia a dissertação</a>
            </div>
            <div className="mt-12 leading-loose text-sm">
              Por Bruno Verissimo, com orientação de Silvio Barreto Campello<br />
              Dúvidas ou mais informações: brunopverissimo@gmail.com<br />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
    author: file(relativePath: { eq: "luis-jardim.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    linhaTempo: file(relativePath: { eq: "linha-tempo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
