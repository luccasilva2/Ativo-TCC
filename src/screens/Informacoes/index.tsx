import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Config() {
  const navigation = useNavigation(); // Importando a função useNavigation para usar a navegação

  return (
    <LinearGradient
      colors={['#808080', '#000']}
      style={styles.background}>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.rectangle}>
          <LinearGradient
              colors={['#C0C0C0', '#FFFFFF']}
              style={styles.gradient}>
              <Text style={styles.text}>
              <Text style={styles.bold}>Investimentos: Navegando pelas Variáveis Financeiras</Text>{"\n"}
              {"\n"}
              <Text style={styles.bold}>Os investimentos representam uma parte crucial da vida financeira de muitos indivíduos e organizações.</Text> Desde o investidor iniciante até o especialista em finanças, compreender as variáveis que influenciam os investimentos é fundamental para tomar decisões informadas e maximizar retornos. Neste texto, exploraremos diversas facetas dos investimentos, desde os conceitos básicos até considerações avançadas, abrangendo temas como tipos de investimentos, riscos, estratégias e tendências do mercado.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Conceitos Fundamentais:</Text>{"\n"}
              <Text style={styles.bold}>Renda Fixa e Variável:</Text> Os investimentos podem ser classificados em renda fixa, onde os retornos são previsíveis, e renda variável, onde os retornos dependem do desempenho do mercado.{"\n"}
              <Text style={styles.bold}>Rentabilidade e Risco:</Text> A relação entre retorno e risco é uma variável crucial. Investimentos mais arriscados tendem a oferecer retornos potencialmente mais altos, enquanto investimentos mais seguros geralmente têm retornos mais baixos.{"\n"}
              <Text style={styles.bold}>Liquidez:</Text> A liquidez de um investimento refere-se à facilidade e rapidez com que ele pode ser convertido em dinheiro sem perda significativa de valor.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Tipos de Investimentos:</Text>{"\n"}
              <Text style={styles.bold}>Ações:</Text> Investir em ações significa comprar uma parte da propriedade de uma empresa. Os retornos dependem do desempenho da empresa no mercado de ações.{"\n"}
              <Text style={styles.bold}>Títulos:</Text> Títulos representam empréstimos feitos a governos ou empresas. Eles oferecem pagamentos de juros regulares e devolução do capital no vencimento.{"\n"}
              <Text style={styles.bold}>Fundos de Investimento:</Text> São pools de dinheiro investidos em uma variedade de ativos, gerenciados por profissionais. Podem ser de renda fixa, variável ou mistos.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Riscos e Diversificação:</Text>{"\n"}
              <Text style={styles.bold}>Risco de Mercado:</Text> Refere-se à possibilidade de perdas devido a mudanças nos preços de mercado.{"\n"}
              <Text style={styles.bold}>Risco de Crédito:</Text> Relacionado à possibilidade de o emissor de um título não cumprir suas obrigações de pagamento.{"\n"}
              <Text style={styles.bold}>Diversificação:</Text> Espalhar o investimento por diferentes classes de ativos pode reduzir o risco total da carteira.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Estratégias de Investimento:</Text>{"\n"}
              <Text style={styles.bold}>Buy and Hold:</Text> Uma estratégia de longo prazo onde os investidores compram ativos e os mantêm por um período prolongado, ignorando flutuações de curto prazo.{"\n"}
              <Text style={styles.bold}>Dollar-Cost Averaging:</Text> Investir regularmente uma quantidade fixa de dinheiro, independentemente do preço do ativo, reduzindo a exposição ao risco de timing do mercado.{"\n"}
              <Text style={styles.bold}>Análise Fundamentalista e Técnica:</Text> A análise fundamentalista avalia os fundamentos financeiros de uma empresa, enquanto a análise técnica se baseia no estudo de padrões de preço e volume no mercado.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Tendências e Inovações:</Text>{"\n"}
              <Text style={styles.bold}>Investimento Sustentável:</Text> Uma tendência crescente onde os investidores consideram não apenas o retorno financeiro, mas também o impacto ambiental, social e de governança (ESG) de seus investimentos.{"\n"}
              <Text style={styles.bold}>Criptomoedas:</Text> O surgimento das criptomoedas introduziu uma nova classe de ativos digital, que tem atraído a atenção de investidores e especuladores.{"\n"}
              <Text style={styles.bold}>Robo-Advisors:</Text> Plataformas online que usam algoritmos para fornecer aconselhamento e gerenciamento de investimentos automatizados, muitas vezes a taxas mais baixas do que os consultores tradicionais.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Considerações Finais:</Text>{"\n"}
              Navegar no mundo dos investimentos requer compreensão, paciência e uma abordagem estratégica. Não existe uma abordagem única que sirva para todos, e cada investidor deve considerar cuidadosamente seus objetivos financeiros, tolerância ao risco e horizonte de investimento ao tomar decisões. Continuar aprendendo e se adaptando às mudanças no mercado é essencial para alcançar o sucesso a longo prazo.{"\n"}
              {"\n"}

              
              {/* Início do texto sobre Finanças */}
              <Text style={styles.bold}>Finanças é um campo vasto e fundamental que permeia todas as áreas da vida moderna.</Text> Desde as decisões individuais de gastos até as complexas transações corporativas, as finanças desempenham um papel crucial em nossas vidas. Neste texto, exploraremos as principais variáveis e conceitos que compõem o mundo das finanças, abrangendo desde noções básicas até tópicos mais avançados.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Fundamentos das Finanças:</Text>{"\n"}
              <Text style={styles.bold}>As finanças abrangem o estudo do gerenciamento do dinheiro e dos recursos financeiros.</Text> Isso inclui a alocação de recursos, investimentos, financiamento e gestão de riscos.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Variáveis Financeiras:</Text>{"\n"}
              <Text style={styles.bold}>As variáveis financeiras são os elementos que influenciam as decisões financeiras.</Text> Isso inclui renda, despesas, ativos, passivos, taxas de juros, inflação, entre outros.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Orçamento Pessoal:</Text>{"\n"}
              <Text style={styles.bold}>Uma parte fundamental das finanças pessoais é o orçamento.</Text> Um orçamento eficaz ajuda a controlar os gastos, economizar e planejar para metas financeiras de curto e longo prazo.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Investimentos:</Text>{"\n"}
              <Text style={styles.bold}>Os investimentos são uma forma de utilizar o dinheiro para gerar retornos futuros.</Text> Isso pode incluir ações, títulos, imóveis, fundos mútuos, entre outros. A diversificação é essencial para mitigar riscos.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Mercado Financeiro:</Text>{"\n"}
              <Text style={styles.bold}>O mercado financeiro é o ambiente onde os investidores compram e vendem ativos financeiros, como ações e títulos.</Text> Ele inclui mercados primários e secundários, onde novos títulos são emitidos e os títulos existentes são negociados, respectivamente.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Análise Financeira:</Text>{"\n"}
              <Text style={styles.bold}>A análise financeira envolve a avaliação do desempenho financeiro de uma entidade, como uma empresa ou investimento.</Text> Isso pode incluir análise de balanço, análise de fluxo de caixa e análise de demonstrações financeiras.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Gestão de Riscos:</Text>{"\n"}
              <Text style={styles.bold}>A gestão de riscos é o processo de identificar, avaliar e mitigar os riscos financeiros.</Text> Isso pode incluir riscos de mercado, riscos de crédito, riscos operacionais, entre outros.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Financiamento Corporativo:</Text>{"\n"}
              <Text style={styles.bold}>As empresas precisam de financiamento para operar e expandir seus negócios.</Text> Isso pode ser feito através de capital próprio (emissão de ações) ou capital de terceiros (empréstimos e títulos).{"\n"}
              {"\n"}
              <Text style={styles.bold}>Planejamento Tributário:</Text>{"\n"}
              <Text style={styles.bold}>O planejamento tributário envolve a minimização legal de impostos.</Text> Isso pode incluir estratégias como deduções fiscais, créditos fiscais e planejamento de ganhos de capital.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Ética Financeira:</Text>{"\n"}
              <Text style={styles.bold}>A ética é crucial em todas as áreas das finanças.</Text> Os profissionais financeiros devem aderir a padrões éticos rigorosos para garantir a integridade e a confiança no sistema financeiro.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Inclusão Financeira:</Text>{"\n"}
              <Text style={styles.bold}>A inclusão financeira refere-se ao acesso equitativo a serviços financeiros, como contas bancárias, empréstimos e seguros.</Text> Isso é essencial para promover o desenvolvimento econômico e reduzir a desigualdade.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Tecnologia Financeira (Fintech):</Text>{"\n"}
              <Text style={styles.bold}>A tecnologia está transformando o setor financeiro, com inovações como pagamentos móveis, empréstimos peer-to-peer e blockchain.</Text> Essas tecnologias têm o potencial de aumentar a eficiência e a acessibilidade dos serviços financeiros.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Economia Comportamental:</Text>{"\n"}
              <Text style={styles.bold}>A economia comportamental estuda como os fatores psicológicos influenciam as decisões financeiras.</Text> Isso inclui vieses cognitivos, como aversão à perda e mentalidade de rebanho, que podem afetar o comportamento dos investidores.{"\n"}
              {"\n"}
              <Text style={styles.bold}>Sustentabilidade Financeira:</Text>{"\n"}
              <Text style={styles.bold}>A sustentabilidade financeira envolve a gestão responsável dos recursos financeiros, levando em consideração os impactos econômicos, sociais e ambientais de longo prazo.</Text>{"\n"}
              {"\n"}
              <Text style={styles.bold}>Globalização Financeira:</Text>{"\n"}
              <Text style={styles.bold}>A globalização tornou os mercados financeiros mais interconectados do que nunca.</Text> Isso significa que eventos em uma parte do mundo podem ter repercussões em todo o sistema financeiro global.{"\n"}
              {"\n"}
              Esses são apenas alguns dos muitos tópicos que compõem o vasto campo das finanças. Como uma disciplina em constante evolução, as finanças continuam a se adaptar às mudanças no ambiente econômico e tecnológico, desempenhando um papel crucial na vida das pessoas e das organizações em todo o mundo.{"\n"}
            </Text>
            </LinearGradient>
          </View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require('../../../assets/flecha.png')} style={styles.imageflecha} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 120, // Espaço para o retângulo superior
  },
  rectangle: {
    width: 340,
    height: 6270, // Altura variável, ajuste conforme necessário
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: -80,
    left: -20,
    zIndex: 1,
  },
  imageflecha: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: 330,
    height: 6120, // Altura variável, ajuste conforme necessário
  },
});
