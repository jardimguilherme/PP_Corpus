# PPs
Repositório de políticas de privacidade. Este repositório contém:

    - (OPP-115) Políticas em EN do corpus OPP-115;
    - (PPs_PT.zip) Políticas em PT com um subdiretório criado com 82 documentos em PT sem redundância.
    - (annotation_tags.txt) Arquivo de configuração para anotações no Label Studio. Semelhante ao usado no OPP-115.
    - (categories-july30.xml) Arquivo de configuração de anotações usado no OPP-115.
    - (corrected_sanitized_w_trafilatura.zip) Documentos sanitizados com o trafilatura e posteriormente revisados manualmente. Muitas enumerações haviam sido ignoradas pelo boilerplate removal (ver arquivo problems.txt).
    - (sanitized_w_trafilatura_html.zip) As 82 Políticas em PT acima, sanitizadas com o trafilatura e em html.
    - (sanitized_w_trafilatura_txt.zip) As 82 Políticas em PT acima, sanitizadas com o trafilatura e em txt.
    - (segmented_by_spacy.zip) Arquivos sanitizados (corrected_sanitized_w_trafilatura.zip) segmentados por sentenças com o uso do nltk.
    - (consolidated_review.txt) Revisão das anotações iniciais feitas em 2 arquivos de PPs. 
    
# Configurando Label Studio 
   Precisamos que cada anotador instale o Label Studio em sua máquina. O link https://labelstud.io/guide/ dá várias opções. Eu usei o pip no ubuntu e funcionou perfeitamente.

Depois da ferramenta instalada, vocês precisarão configurar um projeto. É necessário informar o tipo de anotação. Vá em "Settings", "Labeling Interface", "Browse Templates", "Natural Language Processing", "Text Classification". Clique no ícone "code", copie o conteúdo do arquivo annotation_tags.txt.

Descompacte o arquivo segmented_by_spacy.zip em um diretório qualquer. Em seguida, importe para o projeto apenas os arquivos que irá anotar. Lembre-se de informar que o arquivo csv deve ser tratado como uma lista de tasks.

Pronto, você já pode começar a anotar. 

Ao finalizar a anotação, gere o arquivo json de saída, clicando em "Export" na tela inicial do projeto.

# Instruções de anotação
Se um parágrafo não fizer sentido, deixá-lo sem anotações. O mesmo se aplica a um parágrafo que se encaixe, por exemplo, na categoria "First Party Collection/Use", mas não tenha informação referente a nenhuma das perguntas desta categoria.
