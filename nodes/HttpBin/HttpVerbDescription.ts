import { INodeProperties } from 'n8n-workflow';
// Observação deste documento:
// Este documento serve para a Definição de Operações que devem aparecer
// em cada Resource, incluindo a criação de novos campos para cada Operation


//  ██████╗ ██████╗ ███████╗██████╗  █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
// ██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
// ██║   ██║██████╔╝█████╗  ██████╔╝███████║   ██║   ██║██║   ██║██╔██╗ ██║
// ██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
// ╚██████╔╝██║     ███████╗██║  ██║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
//  ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

// Operation = Funções/Opções de cada Resource (Instancia, Mensagen, Integração, Conversa, Perfil e Grupo)

// "O que cada Resource vai apresentar ao ser selecionado"

// Exemplo:
// Instancias:
//   • Criar instncia;
//   • Criar instancia com proxy;
//   • Conectar instancia;

export const httpVerbOperations: INodeProperties[] = [

// Cada Resource adicionada tera um desse para listar as opções/funções de cada Resource
// Opções da instances-api (Instancias)
	{
		displayName: 'Categoria',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['instances-api'], // Value do Resource
			},
		},

		// Opções que serão vinculadas a Operação "Instancia"
		options: [

			// Opção = Criar instancia
			{
				// Create Instance Basic
				name: 'Criar Instancia',
				action: 'Criar Instancia',
				description: 'Cria uma nova Instancia',
				value: 'instance-basic',
			},

			// Opção = Conectar Instância
			{
				// Instance Connect
				name: 'Conectar Instancia',
				action: 'Conectar Instancia',
				description: 'Gera a conexão de uma Instancia (QR ou Base64)',
				value: 'instance-connect',
			},

			// Opção = Buscar Instancia
			{
				// Fetch Instances
				name: 'Buscar Instancia',
				action: 'Buscar Instancia',
				description: 'Busca e lista as Instancias criadas',
				value: 'fetch-instances',
			},

			// Opção = Definir Comportamento da instancia
			{
				name: 'Definir Comportamento',
				action: 'Definir Comportamento',
				description: 'Define o comportamento da instancia',
				value: 'instanceSettings',
			},

			// Opção = Definir presença
			{
				// Set Presence
				name: 'Definir Presença',
				action: 'Definir Presença',
				description: 'Define a presença na instancia',
				value: 'setPresence',
			},

			// Opção = Reiniciar instancia
			{
				// Restart Instance
				name: 'Reiniciar Instancia',
				action: 'Reiniciar Instancia',
				description: 'Reinicia o socket da Instancia',
				value: 'restart-instance',
			},

			// Opção = Desconectar instancia
			{
				// Logout Instance
				name: 'Desconectar Instancia',
				action: 'Desconectar Instancia',
				description: 'Desconecta o WhatsApp da Instancia',
				value: 'logout-instance',
			},

			// Opção = Deletar instancia
			{
				// Delete Instance
				name: 'Deletar Instancia',
				action: 'Deletar Instancia',
				description: 'Deleta uma Instancia',
				value: 'delete-instance',
			},


		],
		// Definindo como padrão a opção "Criar Instancia"
		default: 'instance-basic',
	},


// =====  Espaço para dividir melhor uma coisa da outra  ===== //
// =====  Espaço para dividir melhor uma coisa da outra  ===== //
// =====  Espaço para dividir melhor uma coisa da outra  ===== //


	// Opções da messages-api (Mensagens)
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['messages-api'], // Value do Resource
			},
		},
		options: [

			// Opção = Enviar mensagem de Texto
			{
				// Send Text
				name: 'Enviar Texto',
				action: 'Enviar Texto',
				description: 'Envia mensagem de Texto',
				value: 'sendText',
			},

			// Opção = Enviar Imagem
			{
				// Send Media
				name: 'Enviar Imagem',
				action: 'Enviar Imagem',
				description: 'Envia mensagem de Imagem',
				value: 'sendImage',
			},

			// Opção = Enviar Video
			{
				// Send Media
				name: 'Enviar Video',
				value: 'sendVideo',
				description: 'Enviar mensagem de Video',
				action: 'Enviar Video',
			},

			// Opção = Enviar Audio
			{
				// Send Narrated Audio
				name: 'Enviar Audio',
				action: 'Enviar Audio',
				description: 'Enviar mensagem de Audio',
				value: 'sendAudio',
			},

			// Opção = Enviar Documento
			{
				// Send Media
				name: 'Enviar Documento',
				action: 'Enviar Documento',
				description: 'Enviar mensagem de Video',
				value: 'sendDocumento',
			},

			// Opção = Enviar Enquete
			{
				// Send Poll
				name: 'Enviar Enquete',
				action: 'Enviar Enquete',
				description: 'Envia uma Enquete de até 12 opções',
				value: 'sendPoll',
			},

			// Opção = Enviar Status
			{
				// Send Status/Stories
				name: 'Enviar Status',
				action: 'Enviar Status',
				description: 'Publicar um Status/Stories',
				value: 'sendStories',
			},

		],
		// Definindo como padrão a opção "Enviar Texto"
		default: 'sendText',
	},

// =====  Espaço para dividir melhor uma coisa da outra  ===== //
// =====  Espaço para dividir melhor uma coisa da outra  ===== //
// =====  Espaço para dividir melhor uma coisa da outra  ===== //


	// Opções da integrations-api (Integração)
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['integrations-api'], // Value do Resource
			},
		},
		options: [

			// Opção = Enviar mensagem de Texto
			{
				// Set/find Webhook
				name: 'Webhook',
				action: 'Webhook',
				description: 'Define/Busca integração com Webhook',
				value: 'webhook',
			},
			{
				// Set/find Rabbitmq
				name: 'RabbitMQ',
				action: 'Rabbitmq',
				description: 'Define/Busca integração com RabbitMQ',
				value: 'rabbitMQ',
			},
			{
				// Set/find Chatwoot
				name: 'Chatwoot',
				action: 'Chatwoot',
				description: 'Define/Busca integração com Chatwoot',
				value: 'chatwoot',
			},
			{
				// Set/find Proxy
				name: 'Proxy',
				action: 'Proxy',
				description: 'Define/Busca integração com Proxy',
				value: 'proxy',
			},

		],
		// Definindo como padrão a opção "Enviar Texto"
		default: 'webhook',
	},

];


// =====  Espaço para dividir melhor uma coisa da outra  ===== //
// =====  Espaço para dividir melhor uma coisa da outra  ===== //
// =====  Espaço para dividir melhor uma coisa da outra  ===== //


//	███████╗██╗     ███████╗███╗   ███╗███████╗███╗   ██╗████████╗███████╗
//	██╔════╝██║     ██╔════╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
//	█████╗  ██║     █████╗  ██╔████╔██║█████╗  ██╔██╗ ██║   ██║   ███████╗
//	██╔══╝  ██║     ██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
//	██���████╗███████╗███████╗██║ ╚═╝ ██║███████╗██║ ╚████║   ██║   ███████║
//	╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝

// Elements = Os campos que aparecem em cada Operation

// "Cada Operation (ex: Enviar mensagem de Texto) tem campos que precisam ser preenchido para fazer uma requisição"

// Exemplo:
// Enviar Mensagem de Texto:
//   • Instancia que vai enviar;
//   • RemoteJid do destinatario;
//   • Mensagem que vai ser enviada;

// Campos das instancias
const instanceOperation: INodeProperties[] = [

	// Campos = Criar Instancia
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome para a instância',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Apikey para instancia',
		name: 'token',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		required: false,
		description: 'Opicional: Digite um Token para a instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Número do WhatsApp',
		name: 'number',
		type: 'string',
		default: '',
		required: false,
		description: 'Opicional: Numero que vai ser conectado na instancia, para receber o Código de pareamento',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_Create_instance',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Comportamento',
				name: 'instanceSettings',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Comportamento Da Instancia',
						name: 'settings',
						values: [
							{
								displayName: 'Rejeitar Ligações',
								name: 'rejectCall',
								type: 'boolean',
								default: false,
								description: 'Whether to automatically reject incoming calls',
							},
							{
								displayName: 'Mensagem Ao Rejeitar',
								name: 'msgCall',
								type: 'string',
								default: '',
								description: 'Whether to send a message after rejecting a call, and if so, what message',
							},
							{
								displayName: 'Ignorar Grupos',
								name: 'groupsIgnore',
								type: 'boolean',
								default: false,
								description: 'Whether to ignore messages from groups',
							},
							{
								displayName: 'Sempre Online',
								name: 'alwaysOnline',
								type: 'boolean',
								default: false,
								description: 'Whether to keep the status always set to Online',
							},
							{
								displayName: 'Ler Mensagens',
								name: 'readMessages',
								type: 'boolean',
								default: false,
								description: 'Whether to automatically mark messages as read',
							},
							{
								displayName: 'Ler Status',
								name: 'readStatus',
								type: 'boolean',
								default: false,
								description: 'Whether to allow the API to view the Status of added contacts',
							},
							{
								displayName: 'Sincronizar Histórico',
								name: 'syncFullHistory',
								type: 'boolean',
								default: false,
								description: 'Whether to synchronize the full message history with the API',
							},
						],
					},
				],
				description: 'Comportamento da instância',
			},
			{
				displayName: 'Proxy',
				name: 'proxy',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configurações Do Proxy',
						name: 'proxySettings',
						values: [
							{
								displayName: 'Host Do Proxy',
								name: 'proxyHost',
								type: 'string',
								default: '',
								description: 'Digite o host do proxy',
							},
							{
								displayName: 'Porta Do Proxy',
								name: 'proxyPort',
								type: 'string',
								default: '1234',
								description: 'Digite a porta do proxy',
							},
							{
								displayName: 'Protocolo Do Proxy',
								name: 'proxyProtocol',
								type: 'options',
								options: [
									{
										name: 'HTTP',
										value: 'http',
									},
									{
										name: 'HTTPS',
										value: 'https',
									},
								],
								default: 'http',
								description: 'Selecione o protocolo do proxy',
							},
							{
								displayName: 'Usuário Do Proxy',
								name: 'proxyUsername',
								type: 'string',
								default: '',
								description: 'Digite o usuário do proxy',
							},
							{
								displayName: 'Senha Do Proxy',
								name: 'proxyPassword',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Digite a senha do proxy',
							},
						],
					},
				],
				description: 'Configurações do proxy',
			},

			{
				displayName: 'Webhook',
				name: 'webhook',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configurações Do Webhook',
						name: 'webhookSettings',
						values: [
							{
								displayName: 'Url do Webhook',
								name: 'webhookUrl',
								type: 'string',
								default: '',
								description: 'Digite a Url que vai receber os eventos do Webhook',
							},
							{
								displayName: 'Webhook por Eventos',
								name: 'webhookByEvents',
								type: 'boolean',
								default: false,
								description: 'Whether to create a route for each event by appending the event name to the end of the URL', // Atualizado
							},
							{
								displayName: 'Base64 no Webhook',
								name: 'webhookBase64',
								type: 'boolean',
								default: false,
								description: 'Whether to send media data in base64 format in the webhook', // Atualizado
							},
							{
								displayName: 'Eventos',
								name: 'webhookEvents',
								type: 'multiOptions',
								default: [], // Adicionado para resolver o erro
								options: [
									{
										name: 'CALL',
										value: 'CALL',
									},
									{
										name: 'CHATS_DELETE',
										value: 'CHATS_DELETE',
									},
									{
										name: 'CHATS_SET',
										value: 'CHATS_SET',
									},
									{
										name: 'CHATS_UPDATE',
										value: 'CHATS_UPDATE',
									},
									{
										name: 'CHATS_UPSERT',
										value: 'CHATS_UPSERT',
									},
									{
										name: 'CONNECTION_UPDATE',
										value: 'CONNECTION_UPDATE',
									},
									{
										name: 'CONTACTS_SET',
										value: 'CONTACTS_SET',
									},
									{
										name: 'CONTACTS_UPDATE',
										value: 'CONTACTS_UPDATE',
									},
									{
										name: 'CONTACTS_UPSERT',
										value: 'CONTACTS_UPSERT',
									},
									{
										name: 'GROUP_PARTICIPANTS_UPDATE',
										value: 'GROUP_PARTICIPANTS_UPDATE',
									},
									{
										name: 'GROUP_UPDATE',
										value: 'GROUP_UPDATE',
									},
									{
										name: 'GROUPS_UPSERT',
										value: 'GROUPS_UPSERT',
									},
									{
										name: 'LABELS_ASSOCIATION',
										value: 'LABELS_ASSOCIATION',
									},
									{
										name: 'LABELS_EDIT',
										value: 'LABELS_EDIT',
									},
									{
										name: 'MESSAGES_DELETE',
										value: 'MESSAGES_DELETE',
									},
									{
										name: 'MESSAGES_SET',
										value: 'MESSAGES_SET',
									},
									{
										name: 'MESSAGES_UPDATE',
										value: 'MESSAGES_UPDATE',
									},
									{
										name: 'MESSAGES_UPSERT',
										value: 'MESSAGES_UPSERT',
									},
									{
										name: 'PRESENCE_UPDATE',
										value: 'PRESENCE_UPDATE',
									},
									{
										name: 'QRCODE_UPDATED',
										value: 'QRCODE_UPDATED',
									},
									{
										name: 'SEND_MESSAGE',
										value: 'SEND_MESSAGE',
									},
									{
										name: 'TYPEBOT_CHANGE_STATUS',
										value: 'TYPEBOT_CHANGE_STATUS',
									},
									{
										name: 'TYPEBOT_START',
										value: 'TYPEBOT_START',
									},
								]
							},
						],
					},
				],
				description: 'Os eventos a serem monitorados',
			},

			{
				displayName: 'RabbitMQ',
				name: 'rabbitmq',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configurações Do RabbitMQ',
						name: 'rabbitmqSettings',
						values: [
							{
								displayName: 'Ativa ou desativa o RabbitMQ',
								name: 'rabbitmqEnabled',
								type: 'boolean',
								default: false,
								description: 'Whether to send media data in base64 format in the RabbitMQ', // Atualizado
							},
							{
								displayName: 'Eventos',
								name: 'rabbitmqEvents',
								type: 'multiOptions',
								default: [], // Adicionado para resolver o erro
								options: [
									{
										name: 'CALL',
										value: 'CALL',
									},
									{
										name: 'CHATS_DELETE',
										value: 'CHATS_DELETE',
									},
									{
										name: 'CHATS_SET',
										value: 'CHATS_SET',
									},
									{
										name: 'CHATS_UPDATE',
										value: 'CHATS_UPDATE',
									},
									{
										name: 'CHATS_UPSERT',
										value: 'CHATS_UPSERT',
									},
									{
										name: 'CONNECTION_UPDATE',
										value: 'CONNECTION_UPDATE',
									},
									{
										name: 'CONTACTS_SET',
										value: 'CONTACTS_SET',
									},
									{
										name: 'CONTACTS_UPDATE',
										value: 'CONTACTS_UPDATE',
									},
									{
										name: 'CONTACTS_UPSERT',
										value: 'CONTACTS_UPSERT',
									},
									{
										name: 'GROUP_PARTICIPANTS_UPDATE',
										value: 'GROUP_PARTICIPANTS_UPDATE',
									},
									{
										name: 'GROUP_UPDATE',
										value: 'GROUP_UPDATE',
									},
									{
										name: 'GROUPS_UPSERT',
										value: 'GROUPS_UPSERT',
									},
									{
										name: 'LABELS_ASSOCIATION',
										value: 'LABELS_ASSOCIATION',
									},
									{
										name: 'LABELS_EDIT',
										value: 'LABELS_EDIT',
									},
									{
										name: 'MESSAGES_DELETE',
										value: 'MESSAGES_DELETE',
									},
									{
										name: 'MESSAGES_SET',
										value: 'MESSAGES_SET',
									},
									{
										name: 'MESSAGES_UPDATE',
										value: 'MESSAGES_UPDATE',
									},
									{
										name: 'MESSAGES_UPSERT',
										value: 'MESSAGES_UPSERT',
									},
									{
										name: 'PRESENCE_UPDATE',
										value: 'PRESENCE_UPDATE',
									},
									{
										name: 'QRCODE_UPDATED',
										value: 'QRCODE_UPDATED',
									},
									{
										name: 'SEND_MESSAGE',
										value: 'SEND_MESSAGE',
									},
									{
										name: 'TYPEBOT_CHANGE_STATUS',
										value: 'TYPEBOT_CHANGE_STATUS',
									},
									{
										name: 'TYPEBOT_START',
										value: 'TYPEBOT_START',
									},
								]
							},
						],
					},
				],
				description: 'Os eventos a serem monitorados',
			},

			{
				displayName: 'Chatwoot',
				name: 'chatwoot',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configurações Do Chatwoot',
						name: 'chatwootSettings',
						values: [
							{
								displayName: 'ID Da Conta Do Chatwoot',
								name: 'chatwootAccountId',
								type: 'string',
								default: '',
								description: 'Digite o ID da conta do Chatwoot',
							},
							{
								displayName: 'Token De Admin Do Chatwoot',
								name: 'chatwootToken',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Digite o token de admin do Chatwoot',
							},
							{
								displayName: 'Link Do Chatwoot',
								name: 'chatwootUrl',
								type: 'string',
								default: '',
								description: 'Digite o link do Chatwoot',
							},
							{
								displayName: 'Assinatura Do Agente Do Chatwoot',
								name: 'chatwootSignMsg',
								type: 'boolean',
								default: false,
								description: 'Whether to enable or disable the Chatwoot agent signature',
							},
							{
								displayName: 'Reabrir Mensagens No Chatwoot',
								name: 'chatwootReopenConversation',
								type: 'boolean',
								default: false,
								description: 'Whether to enable or disable reopening messages in Chatwoot',
							},
							{
								displayName: 'Iniciar Conversas Como Pendentes No Chatwoot',
								name: 'chatwootConversationPending',
								type: 'boolean',
								default: false,
								description: 'Whether to start conversations as pending in Chatwoot',
							},
							{
								displayName: 'Importar Contatos Para O Chatwoot',
								name: 'chatwootImportContacts',
								type: 'boolean',
								default: false,
								description: 'Whether to import contacts to Chatwoot',
							},
							{
								displayName: 'Nome Da Inbox Do Chatwoot',
								name: 'chatwootNameInbox',
								type: 'string',
								default: '',
								description: 'Digite o nome da Inbox do Chatwoot',
							},
							{
								displayName: 'Mesclar Contatos Brasileiros No Chatwoot',
								name: 'chatwootMergeBrazilContacts',
								type: 'boolean',
								default: false,
								description: 'Whether to merge Brazilian contacts in Chatwoot',
							},
							{
								displayName: 'Importar Mensagens Para O Chatwoot',
								name: 'chatwootImportMessages',
								type: 'boolean',
								default: false,
								description: 'Whether to import messages to Chatwoot',
							},
							{
								displayName: 'Importar Mensagens De Quantos Dias Para O Chatwoot',
								name: 'chatwootDaysLimitImportMessages',
								type: 'number',
								default: 0,
								description: 'Digite o número de dias para limitar a importação de mensagens para o Chatwoot',
							},
							{
								displayName: 'Nome Do Contato De QRCode No Chatwoot',
								name: 'chatwootOrganization',
								type: 'string',
								default: '',
								description: 'Digite o nome do contato de QRCode no Chatwoot',
							},
							{
								displayName: 'Url Do Logo Para O Contato No Chatwoot',
								name: 'chatwootLogo',
								type: 'string',
								default: 'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
								description: 'Digite a URL do logo para o contato no Chatwoot',
							},
						],
					},
				],
				description: 'Configurações do Chatwoot',
			},
		],
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},

	// Campos = Conectar Instância
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que deseja pesquisar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-connect'],
			},
		},
	},

	// Campos = Buscar Instancia
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: false,
		description: 'Digite o nome da instância que deseja pesquisar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['fetch-instances'],
			},
		},
	},

	// Campos = Definir Comportamento
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome para a instância',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},
	{
		displayName: 'Rejeitar Chamadas',
		name: 'rejectCall',
		type: 'boolean',
		default: false,
		description: 'Whether to reject calls or not.',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},
	{
		displayName: 'Mensagem de Chamadas',
		name: 'msgCall',
		type: 'string',
		default: 'Não aceitamos ligações telefônicas.',
		required: false,
		description: 'Mensagem a ser enviada se as chamadas forem rejeitadas.',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},
	{
		displayName: 'Ignorar Grupos',
		name: 'groupsIgnore',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},
	{
		displayName: 'Sempre Online',
		name: 'alwaysOnline',
		type: 'boolean',
		default: false,
		description: 'Whether the instance should always be online or not.',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},
	{
		displayName: 'Ler Mensagens',
		name: 'readMessages',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},
	{
		displayName: 'Sincronizar Histórico Completo',
		name: 'syncFullHistory',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all history or not.',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},
	{
		displayName: 'Ler Status',
		name: 'readStatus',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instanceSettings'],
			},
		},
	},

	// Campos = Definir presença
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai ser deletada',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['setPresence'],
			},
		},
	},
	{
		displayName: 'Presença',
		name: 'presence',
		type: 'options',
		description: 'Define o status da presença na instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['setPresence'],
			},
		},
		options: [
			{
				name: 'Disponivel',
				value: 'available',
			},
			{
				name: 'Indisponível',
				value: 'unavailable',
			},
		],
		default: 'available',
	},

	// Campos = Reiniciar instancia
	{
		displayName: 'Nome da Insticância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que deseja pesquisar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['restart-instance'],
			},
		},
	},


	// Campos = Desconectar instancia
	{
		displayName: 'Nome da Insticância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que deseja pesquisar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['logout-instance'],
			},
		},
	},

	// Campos = Deletar instancia
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai ser deletada',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['delete-instance'],
			},
		},
	},

];

// Campo das Mensagens
const messageOperation: INodeProperties[] = [
	// Campos = Enviar mensagem de texto
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: false,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},
	{
		displayName: 'Numero do destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'remoteJid do destinarario',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'messageText',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite a mensagem de texto que será enviado',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},
	{
		displayName: 'Enviar com Marcação Fantasma?',
		name: 'mentionsEveryOne',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},


	// Campos = Enviar Imagem
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	{
		displayName: 'Imagem',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 da imagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto a ser enviado junto a imagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	//{
	//	displayName: 'Mimetype',
	//	name: 'mimetype',
	//	type: 'string',
	//	default: 'image/png',
	//	required: false,
	//	description: 'Tipo MIME da imagem',
	//	displayOptions: {
	//		show: {
	//			resource: ['messages-api'],
	//			operation: ['sendImage'],
	//		},
	//	},
	//},
	//{
	//	displayName: 'Nome do Arquivo',
	//	name: 'fileName',
	//	type: 'string',
	//	default: 'Imagem.png',
	//	required: false,
	//	description: 'Nome do arquivo da imagem',
	//	displayOptions: {
	//		show: {
	//			resource: ['messages-api'],
	//			operation: ['sendImage'],
	//		},
	//	},
	//},
	{
		displayName: 'Enviar com Marcação Fantasma?',
		name: 'mentionsEveryOne',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},


	// Campos = Enviar Video
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o vídeo',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	{
		displayName: 'Vídeo',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do vídeo',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto a ser enviado junto ao vídeo',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	// {
	// 	displayName: 'Mimetype',
	// 	name: 'mimetype',
	// 	type: 'string',
	// 	default: 'video/mp4',
	// 	required: false,
	// 	description: 'Tipo MIME do vídeo',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['messages-api'],
	// 			operation: ['sendVideo'],
	// 		},
	// 	},
	// },
	// {
	// 	displayName: 'Nome do Arquivo',
	// 	name: 'fileName',
	// 	type: 'string',
	// 	default: 'Video.mp4',
	// 	required: false,
	// 	description: 'Nome do arquivo do vídeo',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['messages-api'],
	// 			operation: ['sendVideo'],
	// 		},
	// 	},
	// },
	{
		displayName: 'Enviar com Marcação Fantasma?',
		name: 'mentionsEveryOne',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},


	// Campos = Enviar Audio
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o áudio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},
	{
		displayName: 'Audio',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do áudio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},
	{
		displayName: 'Enviar com Marcação Fantasma?',
		name: 'mentionsEveryOne',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},


	// Campos = Enviar Documento
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Documento',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto a ser enviado junto ao documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	//{
	//	displayName: 'Nome do Arquivo',
	//	name: 'fileName',
	//	type: 'string',
	//	default: '',
	//	required: false,
	//	description: 'Nome do arquivo do vídeo',
	//	displayOptions: {
	//		show: {
	//			resource: ['messages-api'],
	//			operation: ['sendDocumento'],
	//		},
	//	},
	//},
	{
		displayName: 'Enviar com Marcação Fantasma?',
		name: 'mentionsEveryOne',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},


	// Campos = Enviar Enquete
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a enquete',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Titulo da Enquete',
		name: 'caption',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o titulo da sua enquete',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Mínimo 2 opções, Máximo 12. Cada opção deve ser única.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_display',
		type: 'fixedCollection',
		default: { metadataValues: [] },
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		description: 'Digite as opções da enquete (mínimo 2, máximo 12). Cada opção deve ser única.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Opção',
						name: 'optionValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Enviar com Marcação Fantasma?',
		name: 'mentionsEveryOne',
		type: 'boolean',
		default: false,
		description: 'Whether to mention them all',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},

	// Campos = Enviar Status
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o status',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Tipo do status',
		name: 'type',
		type: 'options',
		description: 'Escolha o tipo de status você vai postar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
		options: [
			{
				name: 'Status de Texto',
				value: 'text',
			},
			{
				name: 'Status de imagem',
				value: 'image',
			},
			{
				name: 'Status de Video',
				value: 'video',
			},
			{
				name: 'Status de Audio',
				value: 'audio',
			},
		],
		default: 'text',
	},
	{
		displayName: 'Conteudo ou URL',
		name: 'content',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o conteudo ou Url da imagem/video/audio a ser postado',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Texto para status de Imagem/Video',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Digite o texto para status de Imagem/Video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Cor do Background',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Font do texto',
		name: 'font',
		type: 'options',
		description: 'Escolha o tipo da font do seu texto',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
		options: [
			{
				name: 'SERIF',
				value: 1,
			},
			{
				name: 'NORICAN REGULAR',
				value: 2,
			},
			{
				name: 'BRYNDAN WRITE',
				value: 3,
			},
			{
				name: 'BEBASNEUE REGULAR',
				value: 4,
			},
			{
				name: 'OSWALD HEAVY',
				value: 5,
			},
		],
		default: 1,
	},

];

// Campo das Mensagens
const integrationsOperation: INodeProperties[] = [

	// Campos = Webhook
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['webhook'],
			},
		},
	},
	{
		displayName: 'O que deseja fazer',
		name: 'resourceForWebhook',
		type: 'options',
		options: [
			{
				name: 'Definir Webhook',
				value: 'setWebhook',
			},
			{
				name: 'Verificar Webhook',
				value: 'findWebhook',
			},
		],
		default: 'setWebhook',
		description: 'Escolha entre definir um novo webhook ou verificar o webhook',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['webhook'],
			},
		},
	},
	{
		displayName: 'Ativar Webhook',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with Webhook',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Url do Webhook',
		name: 'webhookUrl',
		type: 'string',
		default: '',
		description: 'Digite a Url que vai receber os eventos do Webhook',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Webhook por Eventos',
		name: 'webhookByEvents',
		type: 'boolean',
		default: false,
		description: 'Whether to create a route for each event by appending the event name to the end of the URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Base64 no Webhook',
		name: 'webhookBase64',
		type: 'boolean',
		default: false,
		description: 'Whether to send media data in base64 format in the webhook',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
	},
	{
		displayName: 'Eventos',
		name: 'webhookEvents',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['webhook'],
				resourceForWebhook: ['setWebhook'],
			},
		},
		default: [],
		options: [
			{
				name: 'CALL',
				value: 'CALL',
			},
			{
				name: 'CHATS_DELETE',
				value: 'CHATS_DELETE',
			},
			{
				name: 'CHATS_SET',
				value: 'CHATS_SET',
			},
			{
				name: 'CHATS_UPDATE',
				value: 'CHATS_UPDATE',
			},
			{
				name: 'CHATS_UPSERT',
				value: 'CHATS_UPSERT',
			},
			{
				name: 'CONNECTION_UPDATE',
				value: 'CONNECTION_UPDATE',
			},
			{
				name: 'CONTACTS_SET',
				value: 'CONTACTS_SET',
			},
			{
				name: 'CONTACTS_UPDATE',
				value: 'CONTACTS_UPDATE',
			},
			{
				name: 'CONTACTS_UPSERT',
				value: 'CONTACTS_UPSERT',
			},
			{
				name: 'GROUP_PARTICIPANTS_UPDATE',
				value: 'GROUP_PARTICIPANTS_UPDATE',
			},
			{
				name: 'GROUP_UPDATE',
				value: 'GROUP_UPDATE',
			},
			{
				name: 'GROUPS_UPSERT',
				value: 'GROUPS_UPSERT',
			},
			{
				name: 'LABELS_ASSOCIATION',
				value: 'LABELS_ASSOCIATION',
			},
			{
				name: 'LABELS_EDIT',
				value: 'LABELS_EDIT',
			},
			{
				name: 'MESSAGES_DELETE',
				value: 'MESSAGES_DELETE',
			},
			{
				name: 'MESSAGES_SET',
				value: 'MESSAGES_SET',
			},
			{
				name: 'MESSAGES_UPDATE',
				value: 'MESSAGES_UPDATE',
			},
			{
				name: 'MESSAGES_UPSERT',
				value: 'MESSAGES_UPSERT',
			},
			{
				name: 'PRESENCE_UPDATE',
				value: 'PRESENCE_UPDATE',
			},
			{
				name: 'QRCODE_UPDATED',
				value: 'QRCODE_UPDATED',
			},
			{
				name: 'SEND_MESSAGE',
				value: 'SEND_MESSAGE',
			},
			{
				name: 'TYPEBOT_CHANGE_STATUS',
				value: 'TYPEBOT_CHANGE_STATUS',
			},
			{
				name: 'TYPEBOT_START',
				value: 'TYPEBOT_START',
			},
		]
	},

	// Campos = RabbitMQ
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['rabbitMQ'],
			},
		},
	},
	{
		displayName: 'O que deseja fazer',
		name: 'resourceForRabbitMQ',
		type: 'options',
		options: [
			{
				name: 'Definir RabbitMQ',
				value: 'setRabbitMQ',
			},
			{
				name: 'Verificar RabbitMQ',
				value: 'findRabbitMQ',
			},
		],
		default: 'setRabbitMQ',
		description: 'Escolha entre ativar/desativar RabbitMQ ou verificar o RabbitMQ',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['rabbitMQ'],
			},
		},
	},
	{
		displayName: 'Ativar RabbitMQ',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with RabbitMQ.',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['rabbitMQ'],
				resourceForRabbitMQ: ['setRabbitMQ'],
			},
		},
	},
	{
		displayName: 'Eventos',
		name: 'rabbitMQEvents',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['rabbitMQ'],
				resourceForRabbitMQ: ['setRabbitMQ'],
			},
		},
		default: [],
		options: [
			{
				name: 'CALL',
				value: 'CALL',
			},
			{
				name: 'CHATS_DELETE',
				value: 'CHATS_DELETE',
			},
			{
				name: 'CHATS_SET',
				value: 'CHATS_SET',
			},
			{
				name: 'CHATS_UPDATE',
				value: 'CHATS_UPDATE',
			},
			{
				name: 'CHATS_UPSERT',
				value: 'CHATS_UPSERT',
			},
			{
				name: 'CONNECTION_UPDATE',
				value: 'CONNECTION_UPDATE',
			},
			{
				name: 'CONTACTS_SET',
				value: 'CONTACTS_SET',
			},
			{
				name: 'CONTACTS_UPDATE',
				value: 'CONTACTS_UPDATE',
			},
			{
				name: 'CONTACTS_UPSERT',
				value: 'CONTACTS_UPSERT',
			},
			{
				name: 'GROUP_PARTICIPANTS_UPDATE',
				value: 'GROUP_PARTICIPANTS_UPDATE',
			},
			{
				name: 'GROUP_UPDATE',
				value: 'GROUP_UPDATE',
			},
			{
				name: 'GROUPS_UPSERT',
				value: 'GROUPS_UPSERT',
			},
			{
				name: 'LABELS_ASSOCIATION',
				value: 'LABELS_ASSOCIATION',
			},
			{
				name: 'LABELS_EDIT',
				value: 'LABELS_EDIT',
			},
			{
				name: 'MESSAGES_DELETE',
				value: 'MESSAGES_DELETE',
			},
			{
				name: 'MESSAGES_SET',
				value: 'MESSAGES_SET',
			},
			{
				name: 'MESSAGES_UPDATE',
				value: 'MESSAGES_UPDATE',
			},
			{
				name: 'MESSAGES_UPSERT',
				value: 'MESSAGES_UPSERT',
			},
			{
				name: 'PRESENCE_UPDATE',
				value: 'PRESENCE_UPDATE',
			},
			{
				name: 'QRCODE_UPDATED',
				value: 'QRCODE_UPDATED',
			},
			{
				name: 'SEND_MESSAGE',
				value: 'SEND_MESSAGE',
			},
			{
				name: 'TYPEBOT_CHANGE_STATUS',
				value: 'TYPEBOT_CHANGE_STATUS',
			},
			{
				name: 'TYPEBOT_START',
				value: 'TYPEBOT_START',
			},
		]
	},

	// Campos = Chatwoot
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'O que deseja fazer',
		name: 'resourceForChatwoot',
		type: 'options',
		options: [
			{
				name: 'Definir Chatwoot',
				value: 'setChatwoot',
			},
			{
				name: 'Verificar Chatwoot',
				value: 'findChatwoot',
			},
		],
		default: 'setChatwoot',
		description: 'Escolha entre ativar/desativar Chatwoot ou verificar o Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'Ativar Chatwoot',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with Chatwoot.',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'ID Da Conta Do Chatwoot',
		name: 'chatwootAccountId',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o ID da conta do Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Token De Admin Do Chatwoot',
		name: 'chatwootToken',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Digite o token de admin do Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Link Do Chatwoot',
		name: 'chatwootUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o link do Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Assinatura Do Agente Do Chatwoot',
		name: 'chatwootSignMsg',
		type: 'boolean',
		default: false,
		description: 'Whether to enable or disable the Chatwoot agent signature',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Reabrir Mensagens No Chatwoot',
		name: 'chatwootReopenConversation',
		type: 'boolean',
		default: false,
		description: 'Whether to enable or disable reopening messages in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Iniciar Conversas Como Pendentes No Chatwoot',
		name: 'chatwootConversationPending',
		type: 'boolean',
		default: false,
		description: 'Whether to start conversations as pending in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Importar Contatos Para O Chatwoot',
		name: 'chatwootImportContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to import contacts to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Nome Da Inbox Do Chatwoot',
		name: 'chatwootNameInbox',
		type: 'string',
		default: '',
		description: 'Opicional: Digite o nome da Inbox do Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Mesclar Contatos Brasileiros No Chatwoot',
		name: 'chatwootMergeBrazilContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to merge Brazilian contacts in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Importar Mensagens Para O Chatwoot',
		name: 'chatwootImportMessages',
		type: 'boolean',
		default: false,
		description: 'Whether to import messages to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Importar Mensagens De Quantos Dias Para O Chatwoot',
		name: 'chatwootDaysLimitImportMessages',
		type: 'number',
		default: 0,
		description: 'Opicional: Digite o número de dias para limitar a importação de mensagens para o Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Criar Caixa De Entrada',
		name: 'chatwootAutoCreate',
		type: 'boolean',
		default: true,
		description: 'Whether to create an inbox automatically',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Nome Do Contato De QRCode No Chatwoot',
		name: 'chatwootOrganization',
		type: 'string',
		default: '',
		description: 'Opicional: Digite o nome do contato de QRCode no Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Url Do Logo Para O Contato No Chatwoot',
		name: 'chatwootLogo',
		type: 'string',
		default: 'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
		description: 'Opicional: Digite a URL do logo para o contato no Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},

	// Campos = Proxy
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
			},
		},
	},
	{
		displayName: 'O que deseja fazer',
		name: 'resourceForProxy',
		type: 'options',
		options: [
			{
				name: 'Definir Proxy',
				value: 'setProxy',
			},
			{
				name: 'Verificar proxy',
				value: 'findProxy',
			},
		],
		default: 'setProxy',
		description: 'Escolha entre ativar/desativar proxy ou verificar o proxy',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
			},
		},
	},
	{
		displayName: 'Ativar proxy',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with proxy.',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Host Do Proxy',
		name: 'proxyHost',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o host do proxy',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Porta Do Proxy',
		name: 'proxyPort',
		type: 'string',
		default: '1234',
		required: true,
		description: 'Digite a porta do proxy',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Protocolo Do Proxy',
		name: 'proxyProtocol',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'HTTP',
				value: 'http',
			},
			{
				name: 'HTTPS',
				value: 'https',
			},
		],
		default: 'http',
		description: 'Selecione o protocolo do proxy',
	},
	{
		displayName: 'Usuário Do Proxy',
		name: 'proxyUsername',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o usuário do proxy',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Senha Do Proxy',
		name: 'proxyPassword',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Digite a senha do proxy',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},

]

export const httpVerbFields: INodeProperties[] = [
	...instanceOperation,
	...messageOperation,
	...integrationsOperation,
];
